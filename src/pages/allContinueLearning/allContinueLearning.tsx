import { useNavigate } from "react-router-dom";
import { ContinueLearning, Navigation } from "../../components";
import toast from "react-hot-toast";

const AllContinueLearning = () => {
  const navigate=useNavigate()
  const courseId=JSON.parse(localStorage.getItem("courseId")!)
  const handleNavigateContinueLearning=()=>{
    courseId ? navigate("/coursedetailes/continulearning"): toast.error("You have not yet started a course to learn")
  }
  return (
    <>
      <Navigation backAddress="/" subjectName="Continue Learning" />
      <div className="px-3 pt-16 pb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className="  flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
        <ContinueLearning
        onClickCourseImage={handleNavigateContinueLearning}
          courseImage="/imagehome/teacher.png"
          className=" flex-shrink-0"
          NumberOfLessons={25}
          NumberOfLessonsRead={23}
          courseTitle="introduction of figma"
          mentorImage="/imagehome/girl.png"
          mentorName="Roberto Grean"
          progressBar={78}
        />
      </div>
    </>
  );
};
export default AllContinueLearning;
