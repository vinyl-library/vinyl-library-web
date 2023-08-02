import React, { ChangeEvent } from 'react'
import { FirstFormInputs, UsernameAvailabilityResponse } from './interface'
import { useFormContext } from 'react-hook-form'
import CustomTextInput from 'src/components/elements/CustomTextInput'
import { useAuthContext } from '@contexts'

export const FirstForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext<FirstFormInputs>()

  const { httpRequest } = useAuthContext()

  const checkUsernameAvailability = async (username: string) => {
    try {
      const response = await httpRequest<UsernameAvailabilityResponse>({
        method: 'get',
        path: `api/user/check/${username}`,
      })
      console.log(response.data.status)
      return response.data.status
    } catch (err) {
      return false
    }
  }

  const handleUsernameChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value
    setValue('username', username)

    if (username.trim() !== '') {
      const isUsernameAvailable = await checkUsernameAvailability(username)
      if (!isUsernameAvailable) {
        setError('username', {
          type: 'manual',
          message: 'Username has been used',
        })
      } else {
        clearErrors('username')
      }
    } else {
      setError('username', {
        type: 'manual',
        message: 'Please fill your username',
      })
    }
  }

  return (
    <div className="flex flex-col gap-6 xl:gap-8 2xl:gap-10">
      <span className="flex justify-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[30px] 3xl:text-[36px] font-black text-crayola">
        Register
      </span>

      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <CustomTextInput
          error={errors.username?.message}
          type="text"
          className="w-full"
          label="Username"
          placeholder="Your Username"
          {...register('username', { required: true })}
          onChange={handleUsernameChange}
        />
        <CustomTextInput
          error={errors.name?.message}
          type="text"
          className="w-full"
          label="Fullname"
          placeholder="Your fullname"
          {...register('name', {
            required: 'Please fill your fullname',
            maxLength: {
              value: 20,
              message: 'Name must not exceed 20 characters',
            },
          })}
        />
        <CustomTextInput
          error={errors.password && 'Please fill your password'}
          type="password"
          className="w-full"
          label="Password"
          placeholder="Your password"
          {...register('password', { required: true })}
        />
      </div>
    </div>
  )
}
