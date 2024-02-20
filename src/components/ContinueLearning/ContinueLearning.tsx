import { ContinueLearningType } from "./type";
export const ContinueLearning: React.FC<ContinueLearningType> = ({
  courseImage,
  courseTitle,
  mentorImage,
  mentorName,
  progressBar,
  NumberOfLessonsRead,
  NumberOfLessons
}) => {
  return (
    <div className="flex border p-3 gap-2 border-slate-400 rounded-lg w-full h-fit  sm:w-96">
      <img
        className="w-1/2 object-cover rounded-md"
        src={courseImage}
        alt="image"
      />
      <div className="flex flex-col gap-2">
        <button className="p-1 bg-orange-200 rounded-xl text-orange-400 w-fit">
          Design
        </button>
        <h1 className="text-sm font-medium">{courseTitle}</h1>
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 rounded-full"
            src={mentorImage}
            alt="profilr png"
          />
          <p className="text-sm">{mentorName}</p>
        </div>
        <div className="flex items-center gap-1">
        <div className={`w-full h-1  cursor-pointer rounded-3xl bg-slate-300 `}>
          <div
            className="h-1 bg-blue-700  rounded-3xl"
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
        <span>{NumberOfLessonsRead}</span>
        <span>/{NumberOfLessons}</span>
        </div>
      </div>
    </div>
  );
};
