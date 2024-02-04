import { useEffect, useState } from "react";
import {instance} from "../../App"
import { Navigation, TopMentor } from "../../components";

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
    <Navigation backAddress="/" subjectName="Top Mentors"/>
    <div className="grid grid-cols-3 gap-2 px-3 py-20">
      {AlltopMentors?.length > 0 &&
        AlltopMentors.map((mentor: mentortyp) => {
          return TopMentor({
            image: `http://localhost:4003${mentor.topMentorImage}`,
            name: mentor.topMentorName,
            key: mentor._id,
          });
        })}
    </div>
    </>
  );
};
export default AllTopMentor;
