import { useState } from "react";
import { courseDetailesType } from "./type";

export const About: React.FC<courseDetailesType> = ({
  aboutCourse,
  access,
  language,
  lastUpdate,
  level,
  mentorImageAddress,
  mentorName,
  numberOfStudent,
  subtitle,
  key,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const textAboutCourse: string = aboutCourse;

  return (
    <div key={key}>
      <div className="mt-3">
        <div>
          <h2 className="text-black font-medium text-lg">About Course</h2>
          <p className="text-slate-700">
            {textAboutCourse && isExpanded
              ? textAboutCourse
              : textAboutCourse?.slice(0, 50) + "..."}
            {!isExpanded ? (
              <button onClick={()=>{setIsExpanded(true);}} className="text-blue-600">
                 Read More
              </button>
            ) : (
              <button onClick={()=>{setIsExpanded(false);}} className="text-blue-600">
                Read Less
              </button>
            )}
          </p>
        </div>
      </div>
      <h1 className="text-xl text-black font-medium mt-3">Tutor</h1>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center  gap-2">
          <img
            className="rounded-full w-12 h-12"
            src={mentorImageAddress}
            alt="teacher"
          />
          <div>
            <h3 className="font-medium text-md">{mentorName}</h3>
            <h3 className="text-sm">Design Tutor</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <img
            className="rounded-full w-12 h-12"
            src="/icons/call.png"
            alt="call image"
          />
          <img
            className="rounded-full w-12 h-12"
            src="/icons/message.png"
            alt="message image"
          />
        </div>
      </div>
      <h1 className="text-xl text-black font-medium mt-3">Info</h1>
      <div className="grid grid-cols-2 gap-y-2 mt-3">
        <div>
          <h1 className="text-black font-medium text-lg">Language</h1>
          <p className="text-slate-500 mt-0.5">{language}</p>
        </div>
        <div>
          <h1 className="text-black font-medium text-lg">student</h1>
          <p className="text-slate-500 mt-0.5">{numberOfStudent}</p>
        </div>
        <div>
          <h1 className="text-black font-medium text-lg">Last Update</h1>
          <p className="text-slate-500 mt-0.5">{lastUpdate}</p>
        </div>
        <div>
          <h1 className="text-black font-medium text-lg">Subtitle</h1>
          <p className="text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <div>
          <h1 className="text-black font-medium text-lg">Level</h1>
          <p className="text-slate-500 mt-0.5">{level}</p>
        </div>
        <div>
          <h1 className="text-black font-medium text-lg">Access</h1>
          <p className="text-slate-500 mt-0.5">{access}</p>
        </div>
      </div>
    </div>
  );
};
