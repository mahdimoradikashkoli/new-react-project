import { useState } from "react";
import { Search, UserReviews } from "../../../../components";
import "./style.css"

export const Reveiw = () => {
 const [filter,setFilter]=useState("")
  
  return (
    <div>
      <h3 className="mt-3 text-lg">
        Revew<span className="text-blue-700">(45)</span>
      </h3>
      <Search
        className="flex items-center bg-slate-200 rounded-lg  border-2 border-transparent focus-within:border-slate-700 mt-4"
        searchtitle="search in reviews"
      />
      <ul className="flex items-center gap-2 overflow-x-auto mt-3">
        <li onClick={()=>setFilter("verified")} className={`py-1 px-2 bg-slate-400 rounded-3xl text-black cursor-pointer ${filter === "verified" && "!bg-blue-700"}`}>Verified</li>
        <li onClick={()=>setFilter("latest")} className={`py-1 px-2 bg-slate-400 rounded-3xl text-black cursor-pointer ${filter === "latest" && "!bg-blue-700"}`}>Latest</li>
        <li onClick={()=>setFilter("detailed reveiws")} className={`py-1 px-2 bg-slate-400 rounded-3xl text-black cursor-pointer ${filter === "detailed reveiws" && "!bg-blue-700"}`}>Detailed Reviews</li>
      </ul>
      <div
        className="mt-4 flex flex-col gap-3"
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
