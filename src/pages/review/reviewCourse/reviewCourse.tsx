import { useEffect, useState } from "react";
import { Button, Navigation } from "../../../components";
import { StyleDivImage } from "./style";
import { instance } from "../../../App";
import { courseInfoType } from "../../../pages";
import { useNavigate } from "react-router-dom";

const ReviewCourse = () => {
  const [courseInfo, setCourseInfo] = useState<courseInfoType>();
  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCourseInfo(data.data.courseDetailes);
    };
    fetchData();
  }, []);
  const navigate=useNavigate()
  return (
    <>
      <StyleDivImage
        style={{
          backgroundImage: `url(http://localhost:4003${courseInfo?.courseImageAddress})`,
        }}
      >
        <Navigation backAddress="/coursedetailes/cd" />
      </StyleDivImage>
      <div
        style={{ height: "37.5rem" }}
        className="bg-white rounded-t-3xl relative -top-10"
      >
        <div className="px-3 text-black">
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
          <h1 className="font-medium text-2xl mt-4">
            {courseInfo?.corseSubject}
          </h1>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-5 sm:h-5 w-4 h-4 rounded-full"
                src="/icons/iconprofile.png"
                alt="icon profile"
              />
              <span className="text-slate-600 sm:text-lg text-xs sm:font-medium">
                {courseInfo?.mentorName}
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-5 sm:h-5 h-3 w-3 rounded-full"
                src="/icons/iconplay.png"
                alt="icon play"
              />
              <span onClick={()=>navigate("/course/lesson-certificate/cd")} className="text-slate-600 text-xs cursor-pointer sm:text-lg sm:font-medium">{`${courseInfo?.numberOfLessons} Lessons`}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <img
                className="sm:w-6 sm:h-6 w-3 h-3 rounded-full"
                src="/icons/iconcertificate.png"
                alt="icon certificate"
              />
              <span onClick={()=>navigate("/course/lesson-certificate/certificate")} className="text-slate-600 cursor-pointer text-xs sm:text-lg sm:font-medium">
                cerificate
              </span>
            </div>
          </div>
          <hr className="border-t-2 border-slate-300 mt-5" />
          <p className="text-center mt-10 text-lg text-slate-500">
            Your overall rating for this course
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/star.png"
              alt="star png"
            />
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/star.png"
              alt="star png"
            />
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/star.png"
              alt="star png"
            />
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/star.png"
              alt="star png"
            />
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/star.png"
              alt="star png"
            />
          </div>
          <div className="mt-4  w-full flex justify-center">
            <form className=" w-full md:w-8/12" action="">
              <div className="flex flex-col  w-full h-48">
                <label className="font-medium" htmlFor="12">
                  Add detailed review
                </label>
                <textarea
                  className="bg-white rounded-md p-2 outline-none border border-slate-600 w-full h-40"
                  placeholder="Enter here"
                  aria-multiline
                  id="12"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-4 px-3  items-center justify-between">
        <Button
          className="text-black font-medium"
          variant="contained"
          children="Submit"
        />
      </div>
    </>
  );
};
export default ReviewCourse;
