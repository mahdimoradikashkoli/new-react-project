import { useState } from "react";
import { Experience } from "../../component/exprience";
import {AboutMentorDetailsType} from "./type"
export const AboutMentorDetails: React.FC<AboutMentorDetailsType> = ({
  Cources,
  descriptionforMentor,
  numberOfStudent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraph: string =descriptionforMentor
  return (
    <>
      <div className="w-full mt-3">
        <h1 className="text-lg font-medium">About</h1>
        <p className="text-sm">
          {paragraph && isExpanded
            ? paragraph
            : paragraph.slice(0, 50) + " ..."}
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-700 border-none outline-none"
            >
              Read More
            </button>
          ) : (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-700 border-none outline-none"
            >
              Read Less
            </button>
          )}
        </p>
      </div>
      <h3 className="text-lg font-medium mt-3">Info</h3>
      <div className="grid grid-cols-2 mt-1">
        <div>
          <h4 className="text-md">Students</h4>
          <span className="text-slate-400">{numberOfStudent}</span>
        </div>
        <div>
          <h4 className="text-md">Cources</h4>
          <span className="text-slate-400">{Cources}</span>
        </div>
      </div>
      <h3 className="text-lg font-medium mt-3">Experience</h3>
      <div className="flex flex-col gap-2">
        <Experience
          date="2022 - New"
          des1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil."
          des2="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          des3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          logo="/icons/icons8-google-48.png"
        />
        <Experience
          date="2018 - 2020"
          des1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil."
          des2="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          des3="Lorem ipsum dolor sit amet, consectetur adipisicing."
          logo="/icons/apple.png"
        />
      </div>
    </>
  );
};
