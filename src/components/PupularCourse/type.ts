import { MouseEventHandler } from "react";
export type PupularCourseType = {
  image: string;
  description?: string;
  teacher: string;
  price: string;
  suggestion: string;
  teacherImg: string;
  onClick?:MouseEventHandler<HTMLImageElement>
};
