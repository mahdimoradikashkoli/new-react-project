import { useState } from "react";
import { PupularCourseType } from "./type";
export const PupularCourse: React.FC<PupularCourseType> = ({
  image,
  description,
  teacher,
  teacherImg,
  price,
  suggestion,
  onClick,
}) => {
  const [bookMark, setBookMark] = useState(false);
  const [selectStar, setSelectStar] = useState(false);
  const [point, setPoint] = useState(5.7);

  const handleSelectStar = () => {
    setSelectStar(!selectStar);
    selectStar ? setPoint(point - 1) : setPoint(point + 1);
  };

  const handleBookMark = () => {
    setBookMark(!bookMark);
  };
  return (
    <div className="flex border rounded-lg p-1 flex-col relative flex-shrink-0 gap-3 w-80">
      <div className="flex items-center z-10 absolute top-3 left-2 bg-slate-500 w-fit h-fit px-1  gap-1 rounded-md">
          <img
            onClick={handleSelectStar}
            className="w-6 h-6 cursor-pointer"
            src={
              selectStar ? "/imagehome/star-icon.png" : "/imagehome/star-kh.png"
            }
            alt="star"
          />
          <span className="text-black text-lg pt-1">{point}</span>
        </div>
        <div className="bg-slate-500 rounded-md absolute z-10 right-2 top-3 py-1">
          <img
            onClick={handleBookMark}
            src={
              bookMark
                ? "/imagehome/bookmark-51.png"
                : "/imagehome/unbookmark-50.png"
            }
            className="w-6 h-6 cursor-pointer"
            alt="bookmark"
          />
        </div>

        <img
          onClick={onClick}
          className="rounded-lg relative cursor-pointer h-48 w-full object-cover"
          src={image}
          alt="course png"
        />

      <p className="text-lg font-medium">{description}</p>
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={`${teacherImg}`}
          alt="teacher img"
        />
        <p>{teacher}</p>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-blue-400 text-xl">{price}</p>
        <button className="py-1 px-2 text-white bg-slate-600 rounded-lg">
          {suggestion}
        </button>
      </div>
    </div>
  );
};
