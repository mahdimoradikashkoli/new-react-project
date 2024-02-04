import { useEffect, useState } from "react";
import {instance} from "../../App"
import { Navigation, PupularCourse } from "../../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {allPupularCourseType} from "./type"

const Responsivecontainer = styled.div`
  padding: 1rem 1rem;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 0;

  @media (min-width: 401px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const AllPupularCourse: React.FC = () => {
  const [allPupularCourse, setAllPupularCourse] = useState([]);
  useEffect(() => {
    const getAllPupularCourse = async () => {
      const pupularcourse = await instance.get("/get/pupuparcourse");
      setAllPupularCourse(pupularcourse.data.msg);
    };
    getAllPupularCourse();
  }, []);

  const navigate=useNavigate()
  return (
    <>
      <Navigation backAddress="/" subjectName="pupular Course" />

      <Responsivecontainer>
        {allPupularCourse?.length > 0 &&
          allPupularCourse.map((course: allPupularCourseType) => {
            return (
              <PupularCourse
                teacher={course.mentorName}
                image={`http://localhost:4003${course.courseImageAddress}`}
                key={course._id}
                price={course.courseprice}
                suggestion="Sea all"
                teacherImg={`http://localhost:4003${course.mentorImageAddress}`}
                onClick={()=>{
                  navigate(`/pagelayout/coursedetailes/?courseid=${course._id}`)
                }}
              />
            );
          })}
      </Responsivecontainer>
    </>
  );
};
export default AllPupularCourse;
