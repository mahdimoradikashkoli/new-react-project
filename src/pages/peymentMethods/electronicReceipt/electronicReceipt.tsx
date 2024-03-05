/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Navigation } from "../../../components";
import { useEffect, useState } from "react";
import { instance } from "../../../App";
import { courseInfoType } from "./type";
// @ts-ignore
import Html2Pdf from 'js-html2pdf'; 
import { ShareReceipt } from "./partials/shareReceipt";
import $ from "jquery";

const ElectronicReceipt = () => {
  const [courseInfo, setCourseInfo] = useState<courseInfoType>();
  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCourseInfo(data.data.courseDetailes);
    };
    courseId && fetchData();
  }, []);

  const downloadReceipt = () => {
    const receiptElement = document.querySelector("#receipt");
    $(receiptElement!).find('p > img').each(function() {
      $(this).unwrap().parent().append(this);
    });
  
    const exporter = new Html2Pdf(receiptElement, "receipt.pdf");
    exporter.getPdf(false).then((pdf:any) => {
      console.log('doing something before downloading pdf file');
      pdf.save();
    });
  };
  
const handleShareReceipt=()=>{
  const shareNavbar = document.querySelector("#sharenavbar");
  if (shareNavbar) {
    $(shareNavbar)?.fadeIn("slow");
  }
}
  return (
    <>
    {ShareReceipt()}
      <Navigation
        backAddress="/payment/paymentresult"
        subjectName="E-Receipt"
        className="justify-between"
        shareImage="/icons/sharepng.png"
        onClickShare={handleShareReceipt}
      />
      <div id="receipt" className="px-3 pt-20 pb-20 sm:flex sm:flex-col sm:justify-center w-full sm:items-center">
        <img className="w-80" src="/image/barcode.png" alt="barcode image" />
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Purchasedate</h4>
            <p className="text-sm text-slate-500 font-medium">August 24,2023 | 10:00 Am</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Mentor</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.mentorName??"Crise Hamsorce"}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Language</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.language??"English"}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Lessons</h4>
            <p className="text-sm text-slate-500 ">
              {courseInfo?.numberOfLessons??"9"}
            </p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Level</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.level??"beginner"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Amount</h4>
            <p className="text-sm text-slate-500 ">{courseInfo?.courseprice??"$2000.00"}</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Tax</h4>
            <p className="text-sm text-slate-500 ">$0.00</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-80 mt-5 gap-2">
          <h4 className="text-lg text-blue-700 font-medium"> Total</h4>
          <p className="text-sm text-slate-500 ">{courseInfo?.courseprice??"$2000.00"}</p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Payment Methods</h4>
            <p className="text-sm text-slate-500 ">Paypal</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Payment Status</h4>
            <p className="text-sm text-slate-500 ">Paid</p>
          </div>
          <div className="flex items-center justify-between w-80">
            <h4 className="text-lg text-blue-700 font-medium"> Transaction ID</h4>
            <p className="text-sm text-slate-500 ">#RE2564HG23</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 fixed bottom-0 left-0 right-0 w-full flex bg-white rounded-t-2xl py-2 px-3  items-center justify-between">
          <Button
            onClick={downloadReceipt}
            children="Download E-Receipt"
            variant="contained"
          />
        </div>
    </>
  );
};
export default ElectronicReceipt;
