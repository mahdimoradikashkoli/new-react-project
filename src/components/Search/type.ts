import { MouseEventHandler } from 'react';
export type searchType = {
  searchtitle: string;
  className: string;
  onClickSearch?:MouseEventHandler<HTMLInputElement>
};