import { useNavigate } from "react-router-dom"
import { ContinueLearning } from "../../../components"

export const Completed=()=>{
  const navigate=useNavigate()
  const handleGoToCourse=()=>{
    navigate("/coursedetailes/mycourse")
      }
    return (
        <div className="p-2 w-full h-screen flex flex-col overflow-y-auto gap-2 mt-4 pb-60 sm:flex-row sm:!flex-wrap">
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={100}
            NumberOfLessons={32}
            NumberOfLessonsRead={32}
          />
        </div>
    )
}