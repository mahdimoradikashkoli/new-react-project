import { MouseEventHandler } from "react";

export type courseDetailesType = {
    aboutCourse: string;
    access: string;
    language: string;
    lastUpdate: string;
    level: string;
    mentorImageAddress: string;
    mentorName: string;
    numberOfStudent: string | number;
    subtitle: string;
    customKey:string;
    subjectCourse:string,
    onClickMentorImage?:MouseEventHandler<HTMLImageElement>
  };