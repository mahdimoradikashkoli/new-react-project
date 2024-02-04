import { Search, UserReviews } from "../../../components";

export const Reviews = () => {
  return (
    <div>
      <div className="flex items-center mt-3">
        <h1 className="font-medium text-xl">Review</h1>
        <p className="pt-1 font-medium text-xl text-blue-700">(45)</p>
      </div>
      <Search
        className="flex items-center bg-slate-200 rounded-lg  border-2 border-transparent focus-within:border-slate-700 mt-4"
        searchtitle="search in reviews"
      />
      <div className="bg-slate-200 py-1 ps-2 pe-4 mt-3 rounded-xl w-fit flex items-center gap-1">
        filter
        <img
          className="w-4 h-4 pt-1"
          src="/icons/filterimage.png"
          alt="filter image"
        />
      </div>
      <div
        className="mt-4 flex flex-col gap-3 overflow-y-auto"
        style={{ height: "408px" }}
      >
        <UserReviews
          userImage="/imagehome/girl.png"
          commentTime="11 mounts ago"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore."
        />
        <UserReviews
          userImage="/imagehome/girl.png"
          commentTime="11 mounts ago"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore."
        />
        <UserReviews
          userImage="/imagehome/girl.png"
          commentTime="11 mounts ago"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore."
        />
      </div>
    </div>
  );
};
