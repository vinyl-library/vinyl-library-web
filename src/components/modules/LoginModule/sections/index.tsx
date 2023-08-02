import React, { useState } from 'react'
import Link from 'next/link'
import LoginForm from '../module-elements/LoginForm'
import ProductSide from '../../../elements/ProductSide'
import { LoginInputs } from '../module-elements/LoginForm/interface'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const LoginSection: React.FC = () => {
  const { ...methods } = useForm<LoginInputs>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      setIsLoading(true)
      await axios.post('/api/auth/login', data)
      setIsLoading(false)
      toast.success('Successfully logged in')
      router.push('/')
    } catch (err: any) {
      setIsLoading(false)
      toast.error('Failed to logged in')
    }
  }

  return (
    <section className="w-full shadow-lg lg:w-4/5 lg:bg-[#ffffff] h-screen lg:h-[90vh] lg:border border-gray-300 rounded-xl flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
      <ProductSide imageUrl="/Login.png" />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 lg:order-2 bg-white rounded-r-xl"
        >
          <div className="items-center space-y-8 2xl:space-y-12 lg:px-12 h-screen lg:h-full px-10 relative z-10 pt-16">
            <LoginForm />

            <div className="flex flex-col items-center justify-center gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center shadow-sm w-full lg:w-[80%] hover:shadow-lg shadow-buff hover:bg-opacity-90 rounded-lg text-[12px] md:text-[14px] lg:text-[18px] bg-crayola font-bold justify-center py-2 px-8"
              >
                Login
              </button>

              <span className="text-tiger">
                Don&apos;t have an account yet?{' '}
                <Link
                  href="/register"
                  className="font-semibold hover:text-crayola hover:underline"
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  )
}

export default LoginSection
