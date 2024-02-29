import { useState } from "react";
import { Navigation, Search } from "../../../components";
import { Faq } from "./partails/FAQ";
import { BoxQuestions } from "./component/BoxComponent";

const HelpCenter = () => {
  const [handleTitle, setHandleTitle] = useState("FAQ");

  return (
    <>
      <Navigation backAddress="/profile/user" subjectName="Help center" />
      <div className="px-3 pt-20 pb-20">
        <Search
          className="flex items-center bg-slate-100 rounded-lg w-full border-2 border-transparent focus-within:border-blue-700 sm:w-96"
          searchtitle="search"
        />
        <div className="flex items-center justify-evenly mt-7">
          <div
            onClick={() => setHandleTitle("FAQ")}
            className="text-center flex flex-col cursor-pointer"
          >
            <h4 className={`${handleTitle == "FAQ" && "text-blue-700 "}`}>
              FAQ
            </h4>
            <hr
              className={`w-32 border-t-4 border-transparent rounded-t-3xl ${
                handleTitle === "FAQ" && "!border-blue-700"
              }`}
            />
          </div>
          <div
            onClick={() => setHandleTitle("contactUs")}
            className="text-center flex flex-col cursor-pointer"
          >
            <h4 className={`${handleTitle == "contactUs" && "text-blue-700 "}`}>
              Contact Us
            </h4>
            <hr
              className={`w-32 border-t-4 border-transparent rounded-t-3xl ${
                handleTitle === "contactUs" && "!border-blue-700"
              }`}
            />
          </div>
        </div>
        <hr />
        <div className="w-full h-screen  mt-6 ">
          {handleTitle === "FAQ" &&  <Faq/>}
          {handleTitle === "contactUs" && <div className="flex flex-col gap-4">
            <BoxQuestions
              description="descriptions for customer service"
              iconForContact="/icons/customerservice.png"
              nameForContactUs="Customer Service"
            />
            <BoxQuestions
              description="(480) 555-0103"
              iconForContact="/icons/WhatsApp_icon.png"
              nameForContactUs="WhatsApp"
            />
            <BoxQuestions
              description={
                <a href="https://google.com" className="text-blue-700">
                  google.com
                </a>
              }
              iconForContact="/icons/website.png"
              nameForContactUs="Website"
            />
            <BoxQuestions
              description={
                <a href="https://facebook.com" className="text-blue-700">
                  Facebook
                </a>
              }
              iconForContact="/icons/facebook.png"
              nameForContactUs="Facebook"
            />
            <BoxQuestions
              description={
                <a href="https://twitter.com" className="text-blue-700">
                  Twitter
                </a>
              }
              iconForContact="/icons/tiwter.png"
              nameForContactUs="Twitter"
            />
            <BoxQuestions
              description={
                <a href="https://instagram.com" className="text-blue-700">
                  INstagram
                </a>
              }
              iconForContact="/icons/instgram.png"
              nameForContactUs="Instagram"
            />
          </div>}
        </div>
      </div>
    </>
  );
};
export default HelpCenter;
