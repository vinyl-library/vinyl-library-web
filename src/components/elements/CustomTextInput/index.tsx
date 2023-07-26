import React, { forwardRef, ComponentPropsWithoutRef, useState } from 'react'
import { CustomTextInputProps } from './interface'
import { ErrorIcon, HelperIcon } from '@icons'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const CustomTextInput = forwardRef<
  HTMLInputElement,
  CustomTextInputProps & ComponentPropsWithoutRef<'input'>
>(
  (
    {
      error,
      helper,
      placeholder,
      type,
      leftIcon,
      rightIcon,
      className,
      defaultValue,
      label = '',
      ...props
    },
    ref
  ) => {
    const [isInvisible, setIsInvisible] = useState(true)

    const VisibilityIcon = isInvisible ? AiFillEye : AiFillEyeInvisible

    const handlePasswordVisibility = () => setIsInvisible(!isInvisible)

    return (
      <div className="flex flex-col gap-3 text-[12px] md:text-[16px] justify-start items-start ">
        <label className="text-lg lg:text-xl font-bold text-bean tracking-wide">
          {label}
        </label>
        <div className="relative w-full text-[#000000]">
          <input
            ref={ref}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={
              type !== 'password' ? type : isInvisible ? 'password' : 'text'
            }
            className={`bg-powder bg-opacity-80 border-buff border-2 text-bean rounded-lg focus:outline-tiger block w-full p-2.5 ${className}`}
            {...props}
          />
          {type === 'password' ? (
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute top-[10px] right-[10px]"
            >
              <VisibilityIcon
                size={24}
                className="text-[#2D2F45] hover:text-[#000000]"
              />
            </button>
          ) : (
            ''
          )}
        </div>

        {!error && helper && (
          <div className="flex items-center gap-[4px] dark:text-white">
            <HelperIcon size="" />
            {helper}
          </div>
        )}

        {!!error && (
          <div className="flex items-center text-left text-sm gap-[4px] text-[#FF7387]">
            <ErrorIcon size="" />
            {error}
          </div>
        )}
      </div>
    )
  }
)

CustomTextInput.displayName = 'CustomTextInput'

export default CustomTextInput
