import { Button, Navigation } from "../../../components";
import { useEffect, useState } from "react";
import { instance } from "../../../App";
import {courseInfoType} from "./type"

const ElectronicReceipt = () => {
    const [courseInfo,setCourseInfo]=useState<courseInfoType>()
    const courseId=JSON.parse(localStorage.getItem("courseId")!)
    useEffect(()=>{
        const fetchData = async () => {
            const data = await instance.get(`/coursedetailes/${courseId}`);
            setCourseInfo(data.data.courseDetailes);
          };
          fetchData();
    },[])
  return (
    <>
      <Navigation
        backAddress="/payment/paymentresult"
        subjectName="E-Receipt"
        className="justify-between"
        shareImage="/icons/sharepng.png"
      />
      <div className="px-3 pt-20 pb-20">
      <img className="w-80" src="/image/barcode.png" alt="barcode image" />
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Purchasedate</h4>
            <p className="text-sm text-slate-500 ">August 24,2023 | 10:00 Am</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Mentor</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.mentorName}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Language</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.language}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Lessons</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.numberOfLessons}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Level</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.level}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Amount</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.courseprice}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Tax</h4>
            <p className="text-sm text-slate-500 ">$0.00</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-80 mt-5 gap-2">
          <h4 className="font-medium"> Total</h4>
          <p className="text-sm text-slate-500 ">{courseInfo?.courseprice}</p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Payment Methods</h4>
            <p className="text-sm text-slate-500 ">Paypal</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Payment Status</h4>
            <p className="text-sm text-slate-500 ">Paid</p>
          </div><div className="flex items-center justify-between w-80">
            <h4 className="font-medium"> Transaction ID</h4>
            <p className="text-sm text-slate-500 ">#RE2564HG23</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-2 px-3  items-center justify-between">
          <Button children="Download E-Receipt" variant="contained" />
        </div>
      </div>
    </>
  );
};
export default ElectronicReceipt;
