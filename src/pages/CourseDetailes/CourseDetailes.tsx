import styled from "styled-components";

const BackGroundDivImage = styled.div`
  background-image: url("/imagehome/teacher.png");
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
`;
const CourseDetailes = () => {
  return (
    <>
      <BackGroundDivImage />
      <div className="rounded-t-3xl relative -top-8 bg-white w-full h-screen">
        <div className="px-3 "></div>
      </div>
    </>
  );
};
export default CourseDetailes;
