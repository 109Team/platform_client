// eslint-disable-next-line standard/object-curly-even-spacing
import { get } from '@/http/index.js'

export const getTestDataApi = (data) => {
  const params = {
    body: data,
    url: '/api/users/dbtest'
  }
  return get(params)
}
