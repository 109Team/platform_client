// eslint-disable-next-line standard/object-curly-even-spacing
import { get} from '@/http/index.js'

export const getLanguageApi = {
  getLanguage: data => {
    const params = {
      body: data,
      url: '/api/cats'
    }
    return get(params)
  }
}
