import { useEffect, useState } from "react";
import { courseInfoType } from "../..";
import { Button, Navigation } from "../../../components";
import { StyleDivImage } from "../reviewCourse/style";
import { instance } from "../../../App";

const ReviewMentor = () => {
  const [courseInfo, setCourseInfo] = useState<courseInfoType>();
  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCourseInfo(data.data.courseDetailes);
    };
    fetchData();
  }, []);

  return (
    <>
      <StyleDivImage
        style={{
          backgroundImage: `url(http://localhost:4003${courseInfo?.courseImageAddress})`,
        }}
      >
        <Navigation backAddress="" />
      </StyleDivImage>
      <div
        style={{ height: "37.5rem" }}
        className="bg-white  rounded-t-3xl relative -top-10 w-full"
      >
        <img
          className="absolute right-0 left-0 -top-12 m-auto w-24 h-24 bg-blue-300 rounded-full border-2 border-white"
          src={`http://localhost:4003${courseInfo?.mentorImageAddress}`}
          alt="mentor image"
        />
        <div className="px-3 relative top-14  text-black">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span>{courseInfo?.mentorName}</span>
              <span className="text-slate-500">{courseInfo?.corseSubject}</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium mt-4">{`How Was Your experience white ${courseInfo?.mentorName}?`}</p>
          </div>
          <hr className="border-t-2 border-slate-300 mt-5" />
          <p className="text-center mt-10 text-lg text-slate-500">
            Your overall rating
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
          <hr className="border-t-2 border-slate-300 mt-5" />
          <div className="mt-4  w-full flex justify-center">
            <form className=" w-full md:w-8/12" action="">
              <div className="flex flex-col  w-full">
                <label className="font-medium" htmlFor="">
                  Add detailed review
                </label>
                <textarea
                  className="bg-slate-300 rounded-md p-2 outline-none border border-slate-600 w-full h-40"
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
export default ReviewMentor;
