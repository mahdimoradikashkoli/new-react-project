import { MouseEventHandler } from "react"

export type mentorInfoType={
    mentorImgAddress:string,
    mentorName:string,
    subjectCourse:string,
    onclickPhoneIcon?:MouseEventHandler<HTMLImageElement>
    onclickChatIcon?:MouseEventHandler<HTMLImageElement>
    className?:string,
    unikId?:string,
    onClick?:MouseEventHandler<HTMLImageElement>
}