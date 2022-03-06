import { request } from "./request";

// 课程分类
export function getCourseCate() {
  return request({
    url: '/Handler/CourseHandler?action=getcategory',
  })
}

// 课程列表
export function getCourseList(params) {
  return request({
    url: '/Handler/CourseHandler?action=courseshow',
    params
  })
}
