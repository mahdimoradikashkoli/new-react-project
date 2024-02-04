import {courseLessonsType} from "./type"

export const CourseLessons: React.FC<courseLessonsType> = ({
  componentLesson,
  numberOfLessom
}) => {

  return (
    <>

    <div className="">
      <div className="flex gap-1 items-center mt-2">
        <h1 className="text-lg font-medium">Lesson</h1>
        <p className="text-blue-600 font-medium text-lg pt-1">{`(${numberOfLessom})`}</p>
      </div>

      <div
        className="flex flex-col  gap-2  overflow-y-auto pb-12"
        style={{ height: "574px" }}
      >
        {componentLesson}
      </div>
    </div>
    </>
  );
};
