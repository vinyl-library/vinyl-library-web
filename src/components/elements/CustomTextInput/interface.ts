import { ReactNode } from 'react'

export interface CustomTextInputProps {
  label?: string
  placeholder?: string
  helper?: string
  error?: string | boolean;
  type?: 'text' | 'url' | 'email' | 'password' | 'number' | 'hidden' | 'tel'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}
