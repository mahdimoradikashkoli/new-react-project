import { useState } from "react";
import { BoxQuestionstype } from "./type";
export const BoxQuestions: React.FC<BoxQuestionstype> = ({
  description,
  questionsTitle,
  iconForContact,
  nameForContactUs
}) => {
  const [show, setShow] = useState(false);

  const handleShowDescriptions = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full border  border-slate-300 rounded-md p-2 sm:w-96 shadow-xl">
        <div className="flex items-center justify-between">
         {questionsTitle ? <h4 className="font-medium">{questionsTitle}</h4>:
         <div className="flex items-center gap-3">
           <img className="w-8 h-8 rounded-full" src={iconForContact} alt="customer service"/>
           <span className="font-medium">{nameForContactUs}</span>
         </div>
           }

          <button
            onClick={handleShowDescriptions}
            className="p-2 text-blue-700"
          >
            {show ? "close" : "show"}
          </button>
        </div>
        <hr className={show ? "" : "hidden"} id="line" />
        <div className={`${show ? "" : "hidden"}  p-1 `} id="description">
          {description}
        </div>
      </div>
    </>
  );
};
