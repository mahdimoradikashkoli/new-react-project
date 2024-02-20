import { useEffect, useState } from "react";
import { Button, Navigation } from "../../../components";
import { instance } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import {courseInfoType} from "./type"
const ReviewSummery = () => {
  const navigate=useNavigate()
  const [courseInfo, setCoursInfo] = useState<courseInfoType>();
  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCoursInfo(data.data.courseDetailes);
    };
    fetchData();
  }, []);
  const { payment } = useParams();
  return (
    <>
      <Navigation
        backAddress="/payment/peymentmethods"
        subjectName="Review Summery"
      />
      <div className="px-3 pt-16 pb-20 ">
        <div className="flex  p-2 gap-2  rounded-lg w-fit h-40 mb-20">
          <img
            className="w-1/2 object-cover rounded-md"
            src={`http://localhost:4003/${courseInfo?.courseImageAddress}`}
            alt="image"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <img
                className="w-7 h-7"
                src="/imagehome/star.png"
                alt="star image"
              />
              <p className="text-lg font-medium pt-0.5">4.7</p>
            </div>
            <h1 className="font-medium">{courseInfo?.corseSubject}</h1>
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src={`http://localhost:4003${courseInfo?.mentorImageAddress}`}
                alt="profilr png"
              />
              <p>{courseInfo?.mentorName}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-blue-600">{courseInfo?.courseprice}</p>
              <button className="p-1 bg-slate-400 text-yellow-300 text-xs rounded-lg">
                Best selers
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex items-center justify-between w-80">
              <h1 className="text-slate-500 text-lg font-medium">Language</h1>
              <p className="font-medium text-lg">{courseInfo?.language}</p>
            </div>
            <div className="flex items-center justify-between w-80">
              <h1 className="text-slate-500 text-lg font-medium">Lessons</h1>
              <p className="font-medium text-lg">
                {courseInfo?.numberOfLessons}
              </p>
            </div>
            <div className="flex items-center justify-between w-80">
              <h1 className="text-slate-500 text-lg font-medium">Level</h1>
              <p className="font-medium text-lg">{courseInfo?.level}</p>
            </div>
          </div>
          <hr className="border-t-2 w-80" />
          <div className="flex flex-col gap-3 mt-2 mb-2">
            <div className="flex items-center justify-between w-80">
              <h1 className="text-slate-500 text-lg font-medium">Amount</h1>
              <p className="font-medium text-lg">{courseInfo?.courseprice}</p>
            </div>
            <div className="flex items-center justify-between w-80">
              <h1 className="text-slate-500 text-lg font-medium">Tax</h1>
              <p className="font-medium text-lg">{"$0.00"}</p>
            </div>
          </div>
          <hr className="border-t-2 w-80" />
          <div className="flex items-center justify-between w-80 mt-2 mb-2">
            <h1 className="text-slate-500 text-lg font-medium">Total</h1>
            <p className="font-medium text-lg">{courseInfo?.courseprice}</p>
          </div>
          <div className="w-80 bg-white p-2 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              {payment === "Peypal" ? (
                <img
                  className="rounded-md w-10 h-10"
                  src="/icons/paypal.png"
                  alt="paypal logo"
                />
              ) : (
                <img
                  className="rounded-md w-10 h-10"
                  src="/icons/apple.png"
                  alt="apple logo"
                />
              )}
              <p className="text-slate-500 text-base">{payment}</p>
            </div>
            <button onClick={()=>navigate("/payment/peymentmethods")} className="text-blue-600 border-none outline-none">
              Change
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-2 px-3  items-center justify-between">
          <Button onClick={()=>navigate("/payment/paymentresult")} children="Continue" variant="contained" />
        </div>
      </div>
    </>
  );
};
export default ReviewSummery;
