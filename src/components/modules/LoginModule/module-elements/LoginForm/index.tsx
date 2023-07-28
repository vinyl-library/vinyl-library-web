import React from 'react'
import { LoginInputs } from './interface'
import { useFormContext } from 'react-hook-form'
import CustomTextInput from 'src/components/elements/CustomTextInput'

const LoginForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginInputs>()

  return (
    <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10">
      <span className="flex justify-center text-[16px] md:text-[18px] lg:text-[24px] font-black text-crayola">
        Login
      </span>

      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <CustomTextInput
          error={errors.username && 'Please fill your username'}
          type="text"
          className="w-full"
          label="Username"
          placeholder="Your Username"
          {...register('username', { required: true })}
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

export default LoginForm
