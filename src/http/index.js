import axios from 'axios'

function get (params) {
  return new Promise((resolve, reject) => {
    axios.get(params.url, {
      params: params.body
    }).then(result => {
      resolve(result.data)
    }, err => {
      reject(err)
    })
  })
}

function post (params) {
  return new Promise((resolve, reject) => {
    axios.post(params.url, params.body).then(result => {
      resolve(result.data)
    }, err => {
      reject(err)
    })
  })
}

export {
  get,
  post
}
