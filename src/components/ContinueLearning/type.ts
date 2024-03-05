import { MouseEventHandler } from "react";

export type ContinueLearningType = {
  courseImage: string;
  courseTitle: string;
  mentorImage: string;
  mentorName: string;
  progressBar: number;
  NumberOfLessonsRead: number;
  NumberOfLessons: number;
  className?:string
  onClickCourseImage?:MouseEventHandler<HTMLImageElement>
};
