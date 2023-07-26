import React from 'react'
import { LoginInputs } from './interface'
import { useFormContext } from 'react-hook-form'

const LoginForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginInputs>()

  return (
    <>
      <div className="w-full space-y-5">
        <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
          <span className="text-3xl lg:text-6xl font-black text-crayola">
            Login
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 w-full">
        <div className="flex flex-col gap-3 w-full lg:w-4/5 mx-auto">
          <label className="text-lg lg:text-xl font-bold text-bean tracking-wide">
            Username
          </label>
          <input
            className="bg-powder bg-opacity-80 border-buff border-2 text-bean rounded-lg focus:outline-tiger block w-full p-2.5"
            placeholder="Your Username"
            {...register('username', { required: true })}
          />
          {errors.username && errors.username.type === 'required' && (
            <p className="text-[#ff4646]">Please fill your username!</p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full lg:w-4/5 mx-auto">
          <label className="text-lg lg:text-xl font-bold text-bean tracking-wide">
            Password
          </label>
          <input
            type="password"
            className="bg-powder bg-opacity-80 border-buff border-2 text-bean rounded-lg focus:outline-tiger block w-full p-2.5"
            placeholder="Your Password"
            {...register('password', { required: true })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="text-[#ff4646]">Please fill your password!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default LoginForm
