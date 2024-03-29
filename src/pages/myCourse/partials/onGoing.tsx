import { useNavigate } from "react-router-dom"
import { ContinueLearning } from "../../../components"

export const OnGoing=()=>{
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
            progressBar={39}
            NumberOfLessons={36}
            NumberOfLessonsRead={34}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={39}
            NumberOfLessons={36}
            NumberOfLessonsRead={34}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={90}
            NumberOfLessons={21}
            NumberOfLessonsRead={20}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={3}
            NumberOfLessons={36}
            NumberOfLessonsRead={3}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={9}
            NumberOfLessons={36}
            NumberOfLessonsRead={34}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={50}
            NumberOfLessons={34}
            NumberOfLessonsRead={17}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={70}
            NumberOfLessons={36}
            NumberOfLessonsRead={34}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={28}
            NumberOfLessons={36}
            NumberOfLessonsRead={12}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={86}
            NumberOfLessons={36}
            NumberOfLessonsRead={30}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={54}
            NumberOfLessons={36}
            NumberOfLessonsRead={16}
          />
          <ContinueLearning
          onClickCourseImage={handleGoToCourse}
            courseImage="/imagehome/teacher.png"
            courseTitle="Introduction of figma"
            mentorImage="/imagehome/girl.png"
            mentorName="Crise Hamsorce"
            progressBar={1}
            NumberOfLessons={25}
            NumberOfLessonsRead={1}
          />
        </div>
    )
}