import { useNavigate } from "react-router-dom";
import { navigationType } from "./type";

export const Navigation: React.FC<navigationType> = ({
  backAddress,
  subjectName,
  bookMarkImage,
  shareImage,
  className,
  onClick,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col   items-center">
      {/* <div className={`flex fixed top-3 left-3 right-3  z-10 w-full `}> */}
      <div
        className={` flex  items-center  fixed px-3 pt-3  z-20 w-full   ${className}`}
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
          <h2 className="text-2xl font-medium ml-20 text-yellow-400">
            {subjectName}
          </h2>
        )}
        {bookMarkImage && shareImage && (
          <div className="flex items-center gap-1">
            <button >
              <img
                className="rounded-full w-10 h-10 bg-slate-400"
                src={bookMarkImage}
                alt="share"
              />
            </button>

            <button onClick={onClick}>
              <img
                className="rounded-full w-10 h-10"
                src={shareImage}
                alt="book mark"
              />
            </button>
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};
