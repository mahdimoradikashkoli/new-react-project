import { useEffect, useState } from "react";
import { instanse } from "../../App";
import { Navigation, PupularCourse } from "../../components";
import styled from "styled-components";

interface allPupularCourseType {
  _id: string;
  courseImageAddress: string;
  corseSubject: string;
  mentorImageAddress: string;
  mentorName: string;
  courseprice: string;
}
const Responsivecontainer=styled.div`
  padding:1rem 1rem;
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap:2rem;
  z-index:0;

  @media (min-width:401px){
    flex-direction:row;
    flex-wrap:wrap;
  }
  `
const AllPupularCourse: React.FC = () => {
  const [allPupularCourse, setAllPupularCourse] = useState([]);
  useEffect(() => {
    const getAllPupularCourse = async () => {
      const pupularcourse = await instanse.get("/get/pupuparcourse");
      setAllPupularCourse(pupularcourse.data.msg);
    };
    getAllPupularCourse();
  }, []);

  
  return (
    <>
      <Navigation backAddress="/" subjectName="pupular Course" />
      
      <Responsivecontainer>
        {allPupularCourse?.length > 0 &&
          allPupularCourse.map((course: allPupularCourseType) => {
            return PupularCourse({
              key: course._id,
              image: `http://localhost:4003${course.courseImageAddress}`,
              description: course.corseSubject,
              teacherImg: `http://localhost:4003${course.mentorImageAddress}`,
              teacher: course.mentorName,
              price: course.courseprice,
              suggestion: "see all",
            });
          })}
      </Responsivecontainer>
    </>
  );
};
export default AllPupularCourse;
