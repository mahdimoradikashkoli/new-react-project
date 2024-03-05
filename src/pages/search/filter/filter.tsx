import { useState } from "react";
import { Button, Navigation } from "../../../components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Review } from "./component/Review";

const Filter = () => {
  const [filter, setFilter] = useState("All");
  const [language, setLanguage] = useState("All");
  const [duration, setDuration] = useState("30 minites");
  const [price, setPrice] = useState< number[]>([0, 100000]);
  const handlePriceChange = (value: number | number[]) => {
    setPrice(Array.isArray(value) ? value : [value, value]); 

  };

  
  return (
    <>
      <Navigation className="p-1 bg-white rounded-md" backAddress="/" subjectName="Filter" />
      <div className="mt-20 p-3 pb-28">
        <h1 className="font-medium text-lg">Category</h1>
        <ul className="flex items-center gap-3 overflow-x-auto   mt-2">
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
        <h1 className="font-medium text-lg mt-3">Price Range</h1>
        <div className="flex flex-col gap-2 mt-2 mx-auto">
          <Slider
            min={0}
            max={100000}
            value={price}
            onChange={handlePriceChange}
            range
            trackStyle={{ backgroundColor: 'blue' }} 
          />
          <p className="flex items-center gap-4 text-blue-700">
            Price Range: <span>{`$${price[0]}`}</span> -{" "}
            <span> {`$${price[1]}`}</span>
          </p>
        </div>
        <h1 className="font-medium text-lg mt-3">Reviews</h1>
        <Review point="4.5 and  abov"/>
        <Review point="4.0 - 4.5"/>
        <Review point="3.5 - 4.0"/>
        <Review point="3.0 - 3.5 "/>
        <Review point="2.5 - 3.0 "/>
        <h1 className="font-medium text-lg mt-3">Language</h1>
        <ul className="flex items-center gap-3 overflow-x-auto  mt-2">
          <li
            onClick={() => setLanguage("All")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "All" && "!bg-blue-700"
            }`}
          >
            All
          </li>
          <li
            onClick={() => setLanguage("english")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "english" && "!bg-blue-700"
            }`}
          >
           English
          </li>
          <li
            onClick={() => setLanguage("italian")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "italian" && "!bg-blue-700"
            }`}
          >
            Italian
          </li>
          <li
            onClick={() => setLanguage("german")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "german" && "!bg-blue-700"
            }`}
          >
            German
          </li>
          <li
            onClick={() => setLanguage("french")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "french" && "!bg-blue-700"
            }`}
          >
            French
          </li>
          <li
            onClick={() => setLanguage("persion")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              language === "persion" && "!bg-blue-700"
            }`}
          >
            Persion
          </li>
        </ul>
        <h1 className="font-medium text-lg mt-3">CourseDuration</h1>
        <ul className="flex items-center gap-3 overflow-x-auto  mt-2">
          <li
            onClick={() => setDuration("30 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "30 minites" && "!bg-blue-700"
            }`}
          >
            30 Minites
          </li>
          <li
            onClick={() => setDuration("60 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "60 minites" && "!bg-blue-700"
            }`}
          >
           60 Minites
          </li>
          <li
            onClick={() => setDuration("70 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "70 minites" && "!bg-blue-700"
            }`}
          >
            70 Minites
          </li>
          <li
            onClick={() => setDuration("80 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "80 minites" && "!bg-blue-700"
            }`}
          >
           80 Minites
          </li>
          <li
            onClick={() => setDuration("120 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "120 minites" && "!bg-blue-700"
            }`}
          >
            120 Minites
          </li>
          <li
            onClick={() => setDuration("130 minites")}
            className={`px-3 py-1 bg-slate-200 text-black rounded-2xl cursor-pointer ${
              duration === "130 minites" && "!bg-blue-700"
            }`}
          >
            130 Minites
          </li>
        </ul>
      </div>
      <div className="bg-white border border-slate-300 p-3 fixed bottom-0 right-0 left-0 flex gap-3 items-center rounded-t-3xl ">
        <Button className="text-black" variant="outline" children="Reset filter"/>
        <Button variant="contained" children="Apply"/>
      </div>
    </>
  );
};
export default Filter;
