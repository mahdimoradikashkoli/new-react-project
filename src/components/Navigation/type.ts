import { MouseEventHandler } from "react";

export type navigationType = {
  backAddress: string;
  subjectName?: string;
  shareImage?: string;
  bookMarkImage?: string;
  className?: string;
  searchIcon?: string;
  onClick?:MouseEventHandler<HTMLDivElement>
  onClickShare?: MouseEventHandler<HTMLImageElement>;
  onClickSreach?: MouseEventHandler<HTMLImageElement>;
  onClickBookMark?: MouseEventHandler<HTMLImageElement>;
};
