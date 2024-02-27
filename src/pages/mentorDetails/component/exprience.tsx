import {experienceType} from "./type"
export const Experience: React.FC<experienceType> = ({
  date,
  des1,
  des2,
  des3,
  logo,
}) => {
  return (
    <>
    <div className=" flex flex-col gap-2 mt-1">
      <div className="flex gap-2 items-center">
        <div className="p-1 rounded-full border border-slate-300">
          <img
            className="w-5 h-5 rounded-full "
            src={logo}
            alt="google icon"
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg">Senior UI/UX Designer</h5>
          <span className="text-xs text-slate-400">{date}</span>
        </div>
      </div>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li className="text-xs">
          {des1}
        </li>
        <li className="text-xs">
          {des2}
        </li>
        <li className="text-xs">
          {des3}
        </li>
      </ul>
    </div>
    <hr className="m-1"/>
    </>
    
  );
};
