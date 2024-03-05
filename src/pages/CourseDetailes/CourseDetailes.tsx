import React, { useContext, useEffect, useState } from "react";
import { LessonsInformation, Navigation } from "../../components";
import { About, CourseLessons, Reviews } from "./partials";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../App";
import { Lessons } from "./../../components/Lessons/Lessons";
import { store } from "../../contexts";
import { courseInfoType } from "./type";
import { BackGroundDivImage } from "./style";
import $ from "jquery";
import { ShareCourse } from "./partials/handleShareCourse/handleShareCourse";

const CourseDetailes: React.FC = () => {
  const [bookMark, setBookMark] = useState(false);
  const [selectedTab, setSelectedTab] = useState("about");
  const [courseInfo, setCoursInfo] = useState<courseInfoType>(
    {} as courseInfoType
  );

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

  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    if (courseId) {
      const fetchData = async () => {
        const data = await instance.get(`/coursedetailes/${courseId}`);
        setCoursInfo(data.data.courseDetailes);
      };
      fetchData();
    }
  }, []);

  const handleLessonsShow = () => {
    navigate("/course/lesson-certificate/lessons");
    handleStopSong();
  };
  const handleCertificateShow = () => {
    navigate("/course/lesson-certificate/certificate");
    handleStopSong();
  };
  const handleShare = () => {
    const handleShare = document.getElementById("handleShare");
    if (handleShare) {
      $(handleShare).fadeIn("slow");
    }
  };

  const [selectStar, setSelectStar] = useState(false);
  const [point, setPoint] = useState(4.5);

  const handleSelectStar = () => {
    setSelectStar(!selectStar);
    selectStar ? setPoint(point - 1) : setPoint(point + 1);
  };

  const handleBookMark = () => {
    setBookMark(!bookMark);
  };
  const { handlerout } = useParams();

  return (
    <>
      <BackGroundDivImage
        style={{
          backgroundImage: courseInfo?.courseImageAddress? `url(http://localhost:4003/${courseInfo?.courseImageAddress})`:"url(/imagehome/teacher.png)",
        }}
      >
        <Navigation
          onClick={handleStopSong}
          className="justify-between"
          backAddress={
            handlerout === "continulearning"
              ? "/layoutseeall/allcontinuelearning"
              : handlerout === "mycourse"
              ? "/mycourse"
              : handlerout === "search-course"
              ? "/search/mentor-and-course/course"
              : handlerout === "frombookmark"?  "/bookmarks": handlerout === "ap" ? "/layoutseeall/allpupularcourse":"/"
          }
          onClickBookMark={handleBookMark}
          shareImage="/icons/sharepng.png"
          bookMarkImage={
            bookMark
              ? "/imagehome/bookmark-51.png"
              : "/imagehome/unbookmark-50.png"
          }
          onClickShare={handleShare}
        />
        <button onClick={()=>{navigate("/review/reviewcourse"),handleStopSong()}} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} className="p-1 border border-white text-white rounded-lg">Course Review</button>
      </BackGroundDivImage>
      <div
        style={{ height: "51.5rem" }}
        className="rounded-t-3xl bg-white relative -top-10 w-full "
      >
        <div className="px-3 text-black pt-5 h-full">
          <div className="flex items-center justify-between ">
            <button className="py-1 px-2 rounded-md bg-orange-200 text-orange-500">
              Best Seller
            </button>
            <div className="flex gap-1 items-center">
              <img
                onClick={handleSelectStar}
                className="w-6 h-6 cursor-pointer"
                src={
                  selectStar
                    ? "/imagehome/star-icon.png"
                    : "/imagehome/star-kh.png"
                }
                alt="star"
              />
              <div className="flex pt-1">
                <span className="text-slate-500 text-start">{point}</span>
                <span className="text-slate-500 text-start">(365reviews)</span>
              </div>
            </div>
          </div>
          <h1 className="font-medium text-2xl mt-4">
            {courseInfo?.corseSubject ?? "Introduction of figma"}
          </h1>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-5 sm:h-5 w-3 h-3 rounded-full"
                src="/icons/iconprofile.png"
                alt="icon profile"
              />
              <p onClick={()=>{navigate("/review/reviewmentor"),handleStopSong()}} className="text-slate-600 sm:font-medium sm:text-lg text-xs p-1 cursor-pointer">
                {courseInfo?.mentorName ?? "Crise Hamsorce"}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-5 sm:h-5 w-3 h-3 rounded-full"
                src="/icons/iconplay.png"
                alt="icon play"
              />
              <p
                onClick={handleLessonsShow}
                className="text-slate-600 sm:font-medium sm:text-lg text-xs cursor-pointer sm:p-1"
              >{`${courseInfo?.numberOfLessons ?? "9"} Lessons`}</p>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-5 sm:h-5 w-3 h-3 rounded-full"
                src="/icons/iconcertificate.png"
                alt="icon certificate"
              />
              <p
                onClick={handleCertificateShow}
                className="text-slate-600 text-xs sm:text-lg sm:font-medium cursor-pointer sm:p-1"
              >
                cerificate
              </p>
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-4">
            <div
              onClick={() => {
                handleTabChange("about"), handleStopSong();
              }}
              className={`text-lg font-medium text-center w-20 sm:w-28 cursor-pointer ${
                selectedTab === "about" ? "text-blue-700" : ""
              }`}
            >
              About
              <hr
                className={`border-t-4 border-transparent ${
                  selectedTab === "about" && "!border-blue-700"
                }  rounded-t-3xl`}
              />
            </div>
            <div
              onClick={() => handleTabChange("lesson")}
              className={`text-lg font-medium text-center w-20 sm:w-28 cursor-pointer ${
                selectedTab === "lesson" ? "text-blue-700" : ""
              }`}
            >
              Lessons
              <hr
                className={`border-t-4 border-transparent ${
                  selectedTab === "lesson" && "!border-blue-700"
                }  rounded-t-3xl`}
              />
            </div>
            <div
              onClick={() => {
                handleTabChange("reviews"), handleStopSong();
              }}
              className={`text-lg font-medium text-center w-20 sm:w-28 cursor-pointer ${
                selectedTab === "reviews" ? "text-blue-700" : ""
              }`}
            >
              reviews
              <hr
                className={`border-t-4 border-transparent ${
                  selectedTab === "reviews" && "!border-blue-700"
                }  rounded-t-3xl`}
              />
            </div>
          </div>
          <hr />
          <div style={{ height: "36rem" }} className="overflow-y-auto  ">
            {selectedTab === "about" && (
              <About
                onClickMentorImage={() =>
                  navigate("/mentor-details/course-detailes")
                }
                aboutCourse={courseInfo!.aboutCourse ?? "descriptions for course"}
                access={courseInfo!.access?? "mobile and laptap"}
                customKey={courseInfo!._id ?? "23746#454@343"}
                language={courseInfo!.language?? "english"}
                lastUpdate={courseInfo!.lastUpdate?? "novamber 2022"}
                level={courseInfo!.level?? "beginner"}
                mentorImageAddress={courseInfo!.mentorImageAddress ?`http://localhost:4003/${
                  courseInfo!.mentorImageAddress
                }`:"/imagehome/girl.png"}
                mentorName={courseInfo!.mentorName?? "Crise Hamsorce"}
                numberOfStudent={courseInfo!.numberOfStudent??"453"}
                subtitle={courseInfo!.subtitle?? "introduction figma"}
                subjectCourse={courseInfo?.corseSubject??"introductions of figma"}
              />
            )}
            {selectedTab === "lesson" && (
              <CourseLessons
                numberOfLessom={courseInfo!.numberOfLessons??"9"}
                componentLesson={
                  <>
                    <LessonsInformation
                      section="section 01"
                      subject="Play socure"
                      timeLesson="10"
                    />
                    <Lessons
                      LessonNumber="01"
                      src={courseInfo!.lessonOneAddress?`http://localhost:4003/${
                        courseInfo!.lessonOneAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectOne}
                    />
                    <Lessons
                      LessonNumber="02"
                      src={courseInfo!.lessonToweAddress?`http://localhost:4003/${
                        courseInfo!.lessonToweAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectTowe}
                    />
                    <LessonsInformation
                      section="section 02"
                      subject="Learning Fotball"
                      timeLesson="20"
                    />
                    <Lessons
                      LessonNumber="03"
                      src={courseInfo!.lessonThreeAddress?`http://localhost:4003/${
                        courseInfo!.lessonThreeAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectThree}
                    />
                    <Lessons
                      LessonNumber="04"
                      src={courseInfo!.lessonForAddress?`http://localhost:4003/${
                        courseInfo!.lessonForAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectFor}
                    />
                    <Lessons
                      LessonNumber="05"
                      src={courseInfo!.lessonFiveAddress?`http://localhost:4003/${
                        courseInfo!.lessonFiveAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectFive}
                    />
                    <Lessons
                      LessonNumber="06"
                      src={courseInfo!.lessonSixAddress?`http://localhost:4003/${
                        courseInfo!.lessonSixAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectSix}
                    />
                    <LessonsInformation
                      section="section 03"
                      subject="Final Review"
                      timeLesson="40"
                    />
                    <Lessons
                      LessonNumber="07"
                      src={courseInfo!.lessonSevenAddress?`http://localhost:4003/${
                        courseInfo!.lessonSevenAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectSeven}
                    />
                    <Lessons
                      LessonNumber="08"
                      src={courseInfo!.lessonEightAddress?`http://localhost:4003/${
                        courseInfo!.lessonEightAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectEight}
                    />
                    <Lessons
                      LessonNumber="09"
                      src={courseInfo!.lessonNineAddress?`http://localhost:4003/${
                        courseInfo!.lessonNineAddress
                      }`:"/music/Behnam Bani - Khastam (128).mp3"}
                      subjectLesson={courseInfo!.subjectNine}
                    />
                  </>
                }
              />
            )}
            {selectedTab === "reviews" && <Reviews />}
          </div>
        </div>
      </div>
      <div className="border-t-2 fixed bottom-0 left-0 right-0 w-full flex bg-white rounded-t-2xl py-3 shadow-2xl px-3  items-center justify-between">
        <div>
          <h4 className="text-slate-700 text-lg">Total Price</h4>
          <p className="text-blue-600 font-medium text-lg">
            {courseInfo!.courseprice??"$2000.00"}
          </p>
        </div>
        <button
          onClick={() => {
            handleStopSong(), navigate("/payment/peymentmethods");
          }}
          className="px-8 py-2 font-medium text-white bg-blue-700 text-lg rounded-3xl"
        >
          Enroll Now
        </button>
      </div>
      {ShareCourse()}
    </>
  );
};
export default CourseDetailes;
