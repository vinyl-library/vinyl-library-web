import React from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { LoginInputs } from '../module-elements/LoginForm/interface'
import LoginForm from '../module-elements/LoginForm'
import ProductSide from '../module-elements/ProductSide'
import Link from 'next/link'

const LoginSection: React.FC = () => {
  const { ...methods } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = () => {
    alert('button clicked')
  }

  return (
    <section className="w-full lg:shadow-2xl lg:w-4/5 lg:bg-[#ffffff] h-screen lg:h-[90vh] lg:border border-gray-300 rounded-xl flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
      <ProductSide />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 order-1 lg:order-2 bg-white"
        >
          <div className="items-center space-y-16 lg:px-12 lg:h-full px-10 relative z-10 pt-16">
            <LoginForm />

            <div className="flex flex-col items-center justify-center gap-2">
              <button
                type="submit"
                className="flex items-center shadow-sm hover:shadow text-lg rounded-xl lg:text-xl bg-crayola font-bold justify-center py-3 px-14 hover:px-12"
              >
                Submit
              </button>

              <span className="text-tiger">
                Don&apos;t have an account yet?{' '}
                <Link
                  href={''}
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
