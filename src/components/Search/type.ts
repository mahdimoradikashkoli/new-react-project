import {  FocusEventHandler, MouseEventHandler } from 'react';
export type searchType = {
  searchtitle: string;
  className: string;
  onClickSearch?:MouseEventHandler<HTMLInputElement>
  seggestions?:React.ReactNode,
  onBlur?:FocusEventHandler<HTMLInputElement>
  onClickSearchIcon?:MouseEventHandler<HTMLImageElement>
  navigateToSearchResult?:MouseEventHandler<HTMLLIElement>
};