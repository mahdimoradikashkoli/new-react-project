import { useState } from "react";
import { courseDetailesType } from "./type";
import { MentorInfo } from "../../../../components";

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
  customKey,
  subjectCourse
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const textAboutCourse: string = aboutCourse;

  return (
    <div key={customKey}>
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
      <MentorInfo className="mt-2" mentorImgAddress={mentorImageAddress}
      mentorName={mentorName}
      subjectCourse={subjectCourse}/>
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
