import React, { useContext, useEffect, useState } from "react";
import { LessonsInformation, Navigation } from "../../components";
import { About, CourseLessons, Reviews } from "./partials";
import { useNavigate } from "react-router-dom";
import { instance } from "../../App";
import { Lessons } from "./../../components/Lessons/Lessons";
import { store } from "../../contexts";
import { courseInfoType } from "./type";
import {BackGroundDivImage} from "./style"


const CourseDetailes: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  const [courseInfo, setCoursInfo] = useState<courseInfoType>({} as courseInfoType);

  const { stopSong, curentSong } = useContext(store);
  const navigate = useNavigate();

  const handleStopSong = () => {
    if (curentSong) {
      stopSong(curentSong);
    }
  };

  const handleTabChange = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const courseId=JSON.parse(localStorage.getItem("courseId")!)
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCoursInfo(data.data.courseDetailes);
    };
    fetchData();
  }, []);

  const handleLessonsShow=()=>{
    navigate("/course/lesson-certificate/lessons")
    handleStopSong()
  }
  const handleCertificateShow=()=>{
    navigate("/course/lesson-certificate/certificate")
    handleStopSong()
  }

  return (
    <>
      <BackGroundDivImage
        style={{
          backgroundImage: `url(http://localhost:4003/${courseInfo?.courseImageAddress})`,
        }}
      >
        <Navigation
        onClick={handleStopSong}
          className="justify-between"
          backAddress="/"
          shareImage="/icons/sharepng.png"
          bookMarkImage="/imagehome/unbookmark.png"
        />
      </BackGroundDivImage>
      <div
        style={{ height: "824px" }}
        className="rounded-t-3xl bg-white relative -top-10 w-full "
      >
        <div className="px-3 text-black pb-24">
          <div className="flex items-center justify-between pt-5">
            <button className="py-1 px-2 rounded-md bg-orange-200 text-orange-500">
              Best Seller
            </button>
            <div className="flex gap-1 items-center">
              <img
                className="w-6 h-6"
                src="/imagehome/star-kh.png"
                alt="star"
              />
              <div className="flex pt-1">
                <p className="text-slate-500 text-start">4.5</p>
                <p className="text-slate-500 text-start">(365reviews)</p>
              </div>
            </div>
          </div>
          <h1 className="font-medium text-2xl mt-4">{courseInfo?.corseSubject}</h1>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-0.5">
              <img
                className="w-5 h-5 rounded-full"
                src="/icons/iconprofile.png"
                alt="icon profile"
              />
              <p className="text-slate-600 font-medium p-1">
                {courseInfo?.mentorName}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="w-5 h-5 rounded-full"
                src="/icons/iconplay.png"
                alt="icon play"
              />
              <p onClick={handleLessonsShow} className="text-slate-600 font-medium cursor-pointer p-1">{`${courseInfo?.numberOfLessons} Lessons`}</p>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="w-5 h-5 rounded-full"
                src="/icons/iconcertificate.png"
                alt="icon certificate"
              />
              <p onClick={handleCertificateShow} className="text-slate-600 font-medium cursor-pointer p-1">cerificate</p>
            </div>
          </div>
          <div className="flex justify-evenly mt-4">
            <button
              onClick={() => {
                handleTabChange("about"), handleStopSong();
              }}
              className={`text-lg font-medium p-2 cursor-pointer ${
                selectedTab === "about" ? "text-blue-500" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleTabChange("lesson")}
              className={`text-lg font-medium p-2 cursor-pointer ${
                selectedTab === "lesson" ? "text-blue-500" : ""
              }`}
            >
              Lessons
            </button>
            <button
              onClick={() => {
                handleTabChange("reviews"), handleStopSong();
              }}
              className={`text-lg font-medium p-2 cursor-pointer ${
                selectedTab === "reviews" ? "text-blue-500" : ""
              }`}
            >
              reviews
            </button>
          </div>
          <hr className="border-t-2" />
          {selectedTab === "about" && (
            <About
            onClickMentorImage={()=>navigate("/mentor-details/course-detailes")}
              aboutCourse={courseInfo!.aboutCourse}
              access={courseInfo!.access}
              customKey={courseInfo!._id}
              language={courseInfo!.language}
              lastUpdate={courseInfo!.lastUpdate}
              level={courseInfo!.level}
              mentorImageAddress={`http://localhost:4003/${
                courseInfo!.mentorImageAddress
              }`}
              mentorName={courseInfo!.mentorName}
              numberOfStudent={courseInfo!.numberOfStudent}
              subtitle={courseInfo!.subtitle}
              subjectCourse={courseInfo?.corseSubject}
            />
          )}
          {selectedTab === "lesson" && (
            <CourseLessons
              numberOfLessom={courseInfo!.numberOfLessons}
              componentLesson={
                <>
                  <LessonsInformation
                    section="section 01"
                    subject="Play socure"
                    timeLesson="10"
                  />
                  <Lessons
                    LessonNumber="01"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonOneAddress
                    }`}
                    subjectLesson={courseInfo!.subjectOne}
                  />
                  <Lessons
                    LessonNumber="02"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonToweAddress
                    }`}
                    subjectLesson={courseInfo!.subjectTowe}
                  />
                  <LessonsInformation
                    section="section 02"
                    subject="Learning Fotball"
                    timeLesson="20"
                  />
                  <Lessons
                    LessonNumber="03"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonThreeAddress
                    }`}
                    subjectLesson={courseInfo!.subjectThree}
                  />
                  <Lessons
                    LessonNumber="04"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonForAddress
                    }`}
                    subjectLesson={courseInfo!.subjectFor}
                  />
                  <Lessons
                    LessonNumber="05"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonFiveAddress
                    }`}
                    subjectLesson={courseInfo!.subjectFive}
                  />
                  <Lessons
                    LessonNumber="06"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonSixAddress
                    }`}
                    subjectLesson={courseInfo!.subjectSix}
                  />
                  <LessonsInformation
                    section="section 03"
                    subject="Final Review"
                    timeLesson="40"
                  />
                  <Lessons
                    LessonNumber="07"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonSevenAddress
                    }`}
                    subjectLesson={courseInfo!.subjectSeven}
                  />
                  <Lessons
                    LessonNumber="08"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonEightAddress
                    }`}
                    subjectLesson={courseInfo!.subjectEight}
                  />
                  <Lessons
                    LessonNumber="09"
                    src={`http://localhost:4003/${
                      courseInfo!.lessonNineAddress
                    }`}
                    subjectLesson={courseInfo!.subjectNine}
                  />
                </>
              }
            />
          )}
          {selectedTab === "reviews" && <Reviews />}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-4 px-3  items-center justify-between">
          <div>
            <h4 className="text-slate-700 text-lg">Total Price</h4>
            <p className="text-blue-600 font-medium text-lg">
              {courseInfo!.courseprice}
            </p>
          </div>
          <button
            onClick={() => {
              handleStopSong(),
                navigate("/payment/peymentmethods")
            }}
            className="px-8 py-2 font-medium text-white bg-blue-700 text-lg rounded-3xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};
export default CourseDetailes;
