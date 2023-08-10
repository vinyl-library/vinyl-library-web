import { useAuthContext } from '@contexts'
import { UsernameAvailabilityResponse } from './interface'

export const checkUsernameAvailability = async (username: string) => {
  const { httpRequest } = useAuthContext()

  try {
    const response = await httpRequest<UsernameAvailabilityResponse>({
      method: 'get',
      path: `api/user/check/${username}`,
    })
    return response.data.status
  } catch (err) {
    return false
  }
}
