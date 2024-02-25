import { useState } from "react";
import { BookMarkComponent, MentorInfo, SearchNavbar } from "../../../components";

const SearchcourseAndMentor = () => {
  const [showTitle, setShowTitle] = useState("courses");
  return (
    <>
      <SearchNavbar backaddress="" />
      <div className="fixed p-3 top-20 left-0 right-0 flex flex-col h-screen overflow-y-auto">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => setShowTitle("courses")}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "courses" && "text-blue-800"
              }`}
            >
              Courses
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40  ${
                  showTitle === "courses"
                    ? "border-blue-700"
                    : "border-transparent"
                }`}
              />
            }
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => setShowTitle("mentors")}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "mentors" && "text-blue-800"
              }`}
            >
              Mentors
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40  ${
                  showTitle === "mentors"
                    ? "border-blue-700"
                    : "border-transparent"
                }`}
              />
            }
          </div>
        </div>
        <hr />
        <div className="flex mt-4 items-center justify-between ">
          <h1 className="font-medium">Results for "Design"</h1>
          <span className="text-blue-600">153 Results found</span>
        </div>
        {showTitle === "courses" && (
          <div className="flex mt-4 flex-col gap-2 pb-20 sm:flex-row sm:flex-wrap overflow-y-auto ">
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
            <BookMarkComponent
              corseSubject="introduction of figma"
              courseImageAddress="/imagehome/teacher.png"
              courseprice="$12000.00"
              mentorImageAddress="/imagehome/girl.png"
              mentorName="karim parsa"
              bookMarkIcon="/icons/bookmark.png"
            />
          </div>
        )}
        { showTitle === "mentors" && <div className="flex mt-4 px-3 flex-col gap-2 pb-20 sm:flex-row sm:flex-wrap overflow-y-auto ">
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          <MentorInfo mentorImgAddress="/imagehome/girl.png"
          mentorName="Ronaldo"
          subjectCourse="Learning football"/>
          
        </div>}
      </div>
    </>
  );
};
export default SearchcourseAndMentor;
