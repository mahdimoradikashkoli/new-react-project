import { useState } from "react";
import { CourseComponentType } from "./type";
export const CourseComponent: React.FC<CourseComponentType> = ({
  courseImageAddress,
  corseSubject,
  mentorImageAddress,
  mentorName,
  courseprice,
  onClick,
  bookMarkIcon,
  onClickCourseImage
}) => {
  const [bookMark,setBookMark]=useState(false)
const handleBookMark=()=>{
  setBookMark(!bookMark)
}
  return (
    <div className="flex border border-slate-400  p-2 gap-2  rounded-lg h-40  bg-white text-black w-fit sm:w-96 ">
      <img
      onClick={onClickCourseImage}
        className="w-1/2 object-cover rounded-md cursor-pointer"
        src={courseImageAddress}
        alt="image"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 md:justify-between">
          <h1 className="font-medium text-sm">{corseSubject}</h1>
          {onClick ? (
            <button
              className="bg-blue-700 text-sm text-white p-1 rounded-3xl"
              onClick={onClick}
            >
              Remove
            </button>
          ) : (
            bookMarkIcon && (
              <img onClick={handleBookMark} className="w-6 h-6 cursor-pointer" src={bookMark ?  "/imagehome/bookmark-51.png": '/imagehome/unbookmark-50.png'} alt="bookMark icon" />
            )
          )}
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 rounded-full"
            src={mentorImageAddress}
            alt="profilr png"
          />
          <p>{mentorName}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-blue-600">{courseprice}</p>
          <button className="p-1 bg-slate-400 text-yellow-300 text-xs rounded-lg">
            Best selers
          </button>
        </div>
      </div>
    </div>
  );
};
