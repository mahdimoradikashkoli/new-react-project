import { useNavigate } from "react-router-dom";
import { navigationType } from "./type";

export const Navigation: React.FC<navigationType> = ({
  backAddress,
  subjectName,
  bookMarkImage,
  shareImage,
  className,
  searchIcon,
  onClick,
  onClickShare,
  onClickSreach,
  onClickBookMark,
  classNameSubjectName
}) => {
  const navigate = useNavigate();
  return (
    <div
        className={` flex  items-center  fixed px-3 top-3 left-0 right-0  z-20 w-full  ${className}`}
      >
        <div onClick={onClick} className="flex z-20">
          <button
            onClick={() => {
              navigate(`${backAddress}`);
            }}
          >
            <img
              className="  w-10 h-10 rounded-full"
              src="/icons/back.jpg"
              alt="back img"
            />
          </button>
        </div>
        {subjectName && (
          <h2 className={`text-xl font-medium ml-16 text-slate-500 w-fit ${classNameSubjectName}`}>
            {subjectName}
          </h2>
        )}
        {(bookMarkImage || shareImage || searchIcon) && (
          <div className="flex items-center gap-1 ml-14">
           {bookMarkImage && <img
           onClick={onClickBookMark}
                className="rounded-full w-10 h-10 py-1 bg-white cursor-pointer"
                src={bookMarkImage}
                alt="bookmark"
              />}

            {shareImage && <img onClick={onClickShare}
                className="rounded-full w-10 h-10 cursor-pointer"
                src={shareImage}
                alt="share"
              />}
            {searchIcon && <img onClick={onClickSreach}
                className="rounded-full w-10 h-10 bg-white"
                src={searchIcon}
                alt="book mark"
              />}
          </div>
        )}
      </div>
  );
};
