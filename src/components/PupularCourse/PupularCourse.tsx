
import { PupularCourseType } from "./type";
export const PupularCourse: React.FC<PupularCourseType> = ({
  image,
  description,
  teacher,
  teacherImg,
  price,
  key,
  suggestion,
  onClick
}) => {

  return (
    <div key={key} className="flex flex-col relative flex-shrink-0 gap-3">

      <div className="flex items-center z-10 absolute top-3 left-2 bg-slate-500 w-18 h-10 p-0.5 gap-1 rounded-md">
        <button className="flex">
          <img className="w-6 h-6" src="/imagehome/star-kh.png" alt="star" />
        </button>
        <p className="text-black text-lg pt-1">4.8</p>
      </div>
      <div className="bg-slate-500 rounded-md absolute z-10 right-2 top-3 p-1">
        <img
          src="/imagehome/unbookmark.png"
          className="w-8 h-8"
          alt="bookmark"
        />
      </div>
      <img onClick={onClick} className="rounded-lg relative  h-48 object-cover" src={image} alt="course png" />
      <p className="text-lg font-medium">{description}</p>
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={`${teacherImg}`}
          alt="teacher img"
        />
        <p>{teacher}</p>
      </div>
      <div className="flex gap-8 items-center ">
        <p className="text-blue-400 text-xl">{price}</p>
        <button className="py-1 px-2 bg-slate-600 rounded-lg">
          {suggestion}
        </button>
      </div>
    </div>
  );
};
