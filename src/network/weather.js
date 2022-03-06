import { request } from "./request";

const url = 'http://wthrcdn.etouch.cn/weather_mini'
export function getWeathData(params, url) {
  return request({
    params
  })
}
