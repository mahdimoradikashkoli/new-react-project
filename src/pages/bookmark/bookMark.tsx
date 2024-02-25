import { useState } from "react";
import { BookMarkComponent, Button, FooterNavigation, Navigation } from "../../components";
import $ from "jquery";

const BookMark = () => {
  const [filter, setFilter] = useState("All");
  const handleShowHiddenDiv=()=>{
    const hiddenDiv=document.querySelector("#hiddenDiv"!)
    if(hiddenDiv !== null){
        $(hiddenDiv)?.fadeIn("slow")
    }
  }
  const handleHiddenHiddenDiv=()=>{
    const hiddenDiv=document.querySelector("#hiddenDiv"!)
    if(hiddenDiv !== null){
        $(hiddenDiv)?.fadeOut("slow")
    }
  }
  return (
    <>
      <div className="p-3">
        <Navigation
          className="justify-between bg-slate-200 rounded-lg p-2"
          backAddress="/"
          subjectName="Bookmark"
          searchIcon="/icons/search.png"
        />
          <ul className="fixed left-0 right-0   p-2 top-20 z-10 flex items-center gap-1 overflow-x-auto  justify-between">
            <li
              onClick={() => setFilter("All")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "All" && "!bg-blue-700"
              }`}
            >
              All
            </li>
            <li
              onClick={() => setFilter("Design")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "Design" && "!bg-blue-700"
              }`}
            >
              Design
            </li>
            <li
              onClick={() => setFilter("Cooding")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "Cooding" && "!bg-blue-700"
              }`}
            >
              Cooding
            </li>
            <li
              onClick={() => setFilter("Marketing")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "Marketing" && "!bg-blue-700"
              }`}
            >
              Marketing
            </li>
            <li
              onClick={() => setFilter("accounting")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "accounting" && "!bg-blue-700"
              }`}
            >
              Accounting
            </li>
            <li
              onClick={() => setFilter("science")}
              className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
                filter === "science" && "!bg-blue-700"
              }`}
            >
              Science
            </li>
          </ul>

        <div className="p-3 fixed top-28 left-0 pb-56 right-0 flex flex-col gap-2 sm:gap-4 h-screen overflow-y-auto w-full mt-4 sm:flex-row sm:!flex-wrap ">
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
          <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
            onClick={handleShowHiddenDiv}
          />
        </div>
      </div>
      <FooterNavigation  classNameBookMark="!border-blue-700"/>
      <div id="hiddenDiv" className="hidden p-2 pb-8 w-full bg-slate-300 h-fit text-black rounded-t-3xl absolute left-0 right-0 bottom-0 z-40">
        <p className="text-center font-medium text-lg mb-5">Remove from Favarite?</p>
        <BookMarkComponent
            corseSubject="Design figma"
            courseImageAddress="/imagehome/teacher.png"
            mentorImageAddress="/imagehome/girl.png"
            courseprice="$2000.00"
            mentorName="Mahdi Moradi"
          />
          <div className="flex mt-4 gap-2">
            <Button onClick={handleHiddenHiddenDiv} variant="outline" children="Cancel"/>
            <Button variant="contained" children="Yes,Remove"/>
          </div>
      </div>
    </>
  );
};
export default BookMark;
