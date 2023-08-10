import { ChangeEvent } from 'react'

export interface FirstFormInputs {
  username: string
  name: string
  password: string
}

export interface FirstFormProp {
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface UsernameAvailabilityResponse {
  message: string
  data: {
    status: boolean
  }
}
