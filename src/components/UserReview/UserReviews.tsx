import { userReviewsType } from "./type";
export const UserReviews: React.FC<userReviewsType> = ({
  comment,
  commentTime,
  userImage,
}) => {
  return (
    <>
      <hr className="border-t-2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`${userImage}`}
            alt="userprofile"
          />
          <p className="font-medium text-xl ">Dale Thiel</p>
        </div>
        <p className="font-medium text-slate-500">{commentTime}</p>
      </div>
      <p className="font-medium text-slate-700">{comment}</p>
      <div className="flex items-center gap-1">
        <img className="w-7 h-7" src="/imagehome/star.png" alt="star" />
        <img className="w-7 h-7" src="/imagehome/star.png" alt="star" />
        <img className="w-7 h-7" src="/imagehome/star.png" alt="star" />
        <img className="w-7 h-7" src="/imagehome/star.png" alt="star" />
        <img className="w-7 h-7" src="/imagehome/star.png" alt="star" />
      </div>
    </>
  );
};
