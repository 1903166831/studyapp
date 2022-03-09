import axios from 'axios'

export function request(config) {
  const instance = axios.create({
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

export function getWeathData(city) {
  return request({
    url: 'http://wthrcdn.etouch.cn/weather_mini',
    params: {
      city
    }
  })
}

export function getNowTemp(city) {
  return request({
    url: 'https://restapi.amap.com/v3/weather/weatherInfo',
    params: {
      key: '0d409d33371d0b06da403cf24a5401d8',
      extensions: 'base',
      city
    }
  })
}
