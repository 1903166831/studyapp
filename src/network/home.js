import { request } from "./request";

// 最新课程
export function getNewCourse() {
  return request({
    url: '/Handler/CourseHandler?action=indexshow'
  })
}