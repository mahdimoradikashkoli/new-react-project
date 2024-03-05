import { MouseEventHandler } from "react"

export type CourseComponentType={
    courseImageAddress:string,
    corseSubject:string,
    mentorImageAddress:string,
    mentorName:string,
    courseprice:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    bookMarkIcon?:string,
    onClickCourseImage?:MouseEventHandler<HTMLImageElement>
}