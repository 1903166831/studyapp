import { request } from "./request";

// 学习页面数据
export function getStudyData(params) {
  return request({
    url: '/Handler/CourseHandler?action=learn',
    params
  })
}
