import { useState } from "react";
import {
  FooterNavigation,
  Navigation,
} from "../../components";
import { OnGoing } from "./partials/onGoing";
import { Completed } from "./partials/completed";

const MyCourse = () => {
  const [showTitle, setShowTitle] = useState("ongoing");
  return (
    <>
      <Navigation backAddress="/" subjectName="My Course" />
      <div className="p-3 fixed left-0 right-0  top-11">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => setShowTitle("ongoing")}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "ongoing" && "text-blue-800"
              }`}
            >
              Ongoing
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40 ${
                  showTitle === "ongoing" ? "border-blue-700" : "border-transparent"
                }`}
              />
            }
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => setShowTitle("completed")}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "completed" && "text-blue-800"
              }`}
            >
              Completed
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40  ${
                  showTitle === "completed" ? "border-blue-700" : "border-transparent"
                }`}
              />
            }
          </div>
        </div>
        <hr />
        {(showTitle === "ongoing") && <OnGoing/>}
        {(showTitle === "completed") && <Completed/>}
      </div>
      <FooterNavigation classNameMycourse="bg-blue-700" />
    </>
  );
};
export default MyCourse;
