export type categorietype2 = {
    img: string;
    categorieName: string;
    _id: string;
  };
  export type mentortyp = {
    topMentorImage: string;
    topMentorName: string;
    _id: string;
  };
  
  export interface PupularCourseType {
    _id: string;
    courseImageAddress: string;
    corseSubject: string;
    mentorImageAddress: string;
    mentorName: string;
    courseprice: string;
  }