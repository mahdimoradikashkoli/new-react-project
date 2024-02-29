import { MouseEventHandler } from "react"

export type HandleItemsType={
    itemIcon:string,
    itemName:string,
    onClick:MouseEventHandler<HTMLImageElement>
}