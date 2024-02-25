import { useEffect, useState } from "react";
import { instance } from "../../App";
import { MentorInfo, Navigation } from "../../components";

type mentortyp = {
  topMentorImage: string;
  topMentorName: string;
  _id: string;
};
const AllTopMentor = () => {
  const [AlltopMentors, setAllTopMentors] = useState([]);
  useEffect(() => {
    const getAllTopMentor = async () => {
      const topMentor = await instance.get("/get/topmentor");
      setAllTopMentors(topMentor.data.msg);
    };
    getAllTopMentor();
  }, []);
  return (
    <>
      <Navigation backAddress="/" subjectName="Top Mentors" />
      <div className="px-3  py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {AlltopMentors?.length > 0 &&
            AlltopMentors.map((mentor: mentortyp) => {
              return MentorInfo({
                unikId:mentor?._id,
                mentorImgAddress: `http://localhost:4003${mentor?.topMentorImage}`,
                mentorName: mentor?.topMentorName,
                subjectCourse: "Learning footbal",
              });
            })}
        </div>
      </div>
    </>
  );
};
export default AllTopMentor;
