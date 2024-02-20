import { MouseEventHandler } from "react";

export type navigationType = {
    backAddress: string;
    subjectName?: string;
    shareImage?: string;
    bookMarkImage?: string;
    className?:string,
    onClick?:MouseEventHandler<HTMLButtonElement & HTMLDivElement>
    searchIcon?:string
  };