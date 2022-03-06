import { request } from "./request";

// 我的课程
export function getMycourList(params) {
  return request({
    url: '/Handler/CourseHandler?action=mycourse',
    params
  })
}