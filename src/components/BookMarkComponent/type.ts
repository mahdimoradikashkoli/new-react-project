import { MouseEventHandler } from "react"

export type BookMarkComponentType={
    courseImageAddress:string,
    corseSubject:string,
    mentorImageAddress:string,
    mentorName:string,
    courseprice:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
}