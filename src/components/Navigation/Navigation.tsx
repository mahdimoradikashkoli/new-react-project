import { useNavigate } from "react-router-dom";
import { navigationType } from "./type";

export const Navigation: React.FC<navigationType> = ({
  backAddress,
  subjectName,
  bookMarkImage,
  shareImage,
  className,
  onClick,
  searchIcon,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col   items-center">
      <div
        className={` flex  items-center  fixed px-3 pt-3  z-20 w-full  ${className}`}
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
          <h2 className="text-xl font-medium ml-20 text-blue-800">
            {subjectName}
          </h2>
        )}
        {(bookMarkImage || shareImage || searchIcon) && (
          <div className="flex items-center gap-1">
           {bookMarkImage && <button >
              <img
                className="rounded-full w-10 h-10 bg-slate-400"
                src={bookMarkImage}
                alt="share"
              />
            </button>}

            {shareImage && <button onClick={onClick}>
              <img
                className="rounded-full w-10 h-10"
                src={shareImage}
                alt="book mark"
              />
            </button>}
            {searchIcon && <button className="ml-14" onClick={onClick}>
              <img
                className="rounded-full w-10 h-10 bg-white"
                src={searchIcon}
                alt="book mark"
              />
            </button>}
          </div>
        )}
      </div>
     
    </div>
  );
};
