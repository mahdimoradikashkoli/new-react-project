import { MouseEventHandler } from "react"

export type CategoriesType={
    img:string,
    subject:string,
    key:string,
    onClick?:MouseEventHandler<HTMLImageElement>
}