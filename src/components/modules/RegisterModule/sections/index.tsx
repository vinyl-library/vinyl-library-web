import React, { useState } from 'react'
import Link from 'next/link'
import ProductSide from '../../../elements/ProductSide'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { FirstFormInputs } from '../module-elements/Forms/FirstForm/interface'
import { SecondFormInput } from '../module-elements/Forms/SecondForm/interface'
import { FirstForm, SecondForm } from '../module-elements/Forms'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const RegisterSection: React.FC = () => {
  const { ...methods } = useForm<FirstFormInputs & SecondFormInput>()
  const [activeStep, setActiveStep] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FirstFormInputs & SecondFormInput> = async (
    data
  ) => {
    if (!data.favoriteGenre || data.favoriteGenre.length < 1) {
      methods.setError('favoriteGenre', {})
      return
    }

    try {
      setIsLoading(true)
      console.log(data)
      await axios.post('/api/auth/register', data)
      setIsLoading(false)
      toast.success('Successfully registered')
    } catch (err: any) {
      setIsLoading(false)
      toast.error('Failed to register')
    }
  }

  return (
    <section className="w-full lg:shadow-2xl lg:w-4/5 lg:bg-[#ffffff] h-screen lg:h-[90vh] lg:border border-gray-300 rounded-xl flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
      <ProductSide imageUrl="/Register.png" />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 order-1 lg:order-2 bg-white"
        >
          <div className="items-center space-y-16 lg:px-12 lg:h-full px-10 relative z-10 pt-16">
            {activeStep === 1 && <FirstForm />}
            {activeStep === 2 && <SecondForm />}

            <div className="flex flex-col items-center justify-center gap-2">
              {activeStep === 1 && (
                <button
                  type="button"
                  className="flex items-center shadow-sm w-full lg:w-[80%] hover:shadow-lg shadow-buff hover:bg-opacity-90 text-lg rounded-xl lg:text-xl bg-crayola font-bold justify-center py-3 px-14 hover:px-12"
                  onClick={async () => {
                    if (
                      await methods.trigger(['name', 'username', 'password'])
                    ) {
                      setActiveStep(2)
                    }
                  }}
                >
                  Next
                </button>
              )}
              {activeStep === 2 && (
                <button
                  type="submit"
                  className="flex items-center shadow-sm w-full lg:w-[80%] hover:shadow-lg shadow-buff hover:bg-opacity-90 text-lg rounded-xl lg:text-xl bg-crayola font-bold justify-center py-3 px-14 hover:px-12"
                  disabled={isLoading}
                >
                  Submit
                </button>
              )}

              <span className="text-tiger">
                Already have an account?{' '}
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

export default RegisterSection
