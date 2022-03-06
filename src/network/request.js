import axios from 'axios'

export function request(config, baseUrl) {
  let baseURL = baseUrl || 'http://146.56.207.108:3000'
  const instance = axios.create({
    baseURL,
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
