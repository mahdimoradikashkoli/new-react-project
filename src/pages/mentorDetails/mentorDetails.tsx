import { useState } from "react";
import { CourseComponent, Navigation } from "../../components";
import { Reveiw } from "./partials/reveiw/reveiw";
import { AboutMentorDetails } from "./partials/about";

import $ from "jquery";
import { useParams } from "react-router-dom";
import { ShareButton } from "./partials/shareButton";
const MentorDetails = () => {
  const [handleTitle, setHandleTitle] = useState("about");
  
  const showShareNavbar=()=>{
    const hiddenDiv=document.querySelector("#sharenavbar")
    if(hiddenDiv){
      $(hiddenDiv)?.fadeIn("slow")
    }
  }
const {rout}=useParams()
console.log(rout)
  return (
    <>
      <Navigation
        backAddress={`${rout === "back-home" ? "/" :rout === "course-detailes"? "/coursedetailes": "/layoutseeall/alltopmentor"}`}
        subjectName="Mentor Details"
        shareImage="/icons/sharepng.png"
        className="justify-between"
        onClickShare={showShareNavbar}
      />
      <div className="px-3 py-16">
        <div className="flex items-center justify-between sm:w-96">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/girl.png"
              alt="mentor image"
            />
            <div className="flex flex-col gap-0.5">
              <h3>Johon doe</h3>
              <span className="text-xs">Design Mentor</span>
              <div className="flex items-center">
                <img
                  className="w-4 h-4"
                  src="/imagehome/star.png"
                  alt="star image"
                />
                <span className="text-xs pt-0.5">4.9(365 reveiws)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              //   onClick={onclickPhoneIcon}
              className="rounded-full w-9 h-9"
              src="/icons/call.png"
              alt="call image"
            />
            <img
              //   onClick={onclickChatIcon}
              className="rounded-full w-9 h-9"
              src="/icons/message.png"
              alt="message image"
            />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center justify-evenly mt-5">
          <div
            onClick={() => setHandleTitle("about")}
            className="text-center cursor-pointer"
          >
            <h2
              className={`text-md ${
                handleTitle === "about" && "text-blue-700"
              }`}
            >
              About
            </h2>
            <hr
              className={`border-t-4 rounded-t-xl w-28 border-transparent ${
                handleTitle === "about" && "!border-blue-700"
              }`}
            />
          </div>
          <div
            onClick={() => setHandleTitle("cources")}
            className="text-center cursor-pointer"
          >
            <h2
              className={`text-md ${
                handleTitle === "cources" && "text-blue-700"
              }`}
            >
              cources
            </h2>
            <hr
              className={`border-t-4 rounded-t-xl w-28 border-transparent ${
                handleTitle === "cources" && "!border-blue-700"
              }`}
            />
          </div>
          <div
            onClick={() => setHandleTitle("reveiw")}
            className="text-center cursor-pointer"
          >
            <h2
              className={`text-md ${
                handleTitle === "reveiw" && "text-blue-700"
              }`}
            >
              Reveiw
            </h2>
            <hr
              className={`border-t-4 rounded-t-xl w-28 border-transparent ${
                handleTitle === "reveiw" && "!border-blue-700"
              }`}
            />
          </div>
        </div>
        <hr />
        <div className="h-screen w-full overflow-y-auto">
          { Boolean(handleTitle) && handleTitle === "about" && <AboutMentorDetails Cources={32}
          descriptionforMentor="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ex dignissimos quaerat. Non quae hic dolor eum, suscipit perferendis necessitatibus mollitia sint nisi, esse iusto ratione similique veniam voluptate fuga."
          numberOfStudent={12345}
          />}

          { Boolean(handleTitle) && handleTitle === "cources" && (<><h3 className="text-lg mt-3">
            Cources<span className="text-blue-700">(32)</span>
          </h3>
          <div className="flex flex-col gap-1 mt-2 h-fit sm:flex-row sm:flex-wrap sm:gap-4">
            
              <CourseComponent
              corseSubject="Introduction figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$13000"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="Johon Doe"/>
              <CourseComponent
              corseSubject="Introduction figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$13000"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="Johon Doe"/>
              <CourseComponent
              corseSubject="Introduction figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$13000"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="Johon Doe"/>
              <CourseComponent
              corseSubject="Introduction figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$13000"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="Johon Doe"/>
              <CourseComponent
              corseSubject="Introduction figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$13000"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="Johon Doe"/>
            
          </div></>)}

          {Boolean(handleTitle) && handleTitle === "reveiw" && <Reveiw/>}
        </div>
      </div>
      <ShareButton/>
    </>
  );
};
export default MentorDetails;
