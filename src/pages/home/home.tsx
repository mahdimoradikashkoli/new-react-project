import { useEffect, useState } from "react";
import {
  Categories,
  NavbarForSubject,
  PupularCourse,
  TopMentor,
} from "../../components";
import { instanse } from "../../App";
import { useNavigate } from "react-router-dom";

type categorietype2 = {
  img: string;
  categorieName: string;
  _id: string;
};
type mentortyp = {
  topMentorImage: string;
  topMentorName: string;
  _id: string;
};

interface PupularCourseType {
  _id: string;
  courseImageAddress: string;
  corseSubject: string;
  mentorImageAddress: string;
  mentorName: string;
  courseprice: string;
}
const HomePage: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popularCourses, setPopularCourses] = useState([]);
  const [topMentors, setTopMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categorieRes = await instanse.get("/get/categorie");
        setCategories(categorieRes.data.msg);

        const pupularcourse = await instanse.get("/get/pupuparcourse");
        setPopularCourses(pupularcourse.data.msg);

        const topMentor = await instanse.get("/get/topmentor");
        setTopMentors(topMentor.data.msg);
        console.log(topMentor.data.msg);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (loading && categories.length === 0) {
      fetchData();
    }
  }, [loading, categories]);

  const firstNineObjects = categories.slice(0, 9);
  const userName = JSON.parse(localStorage.getItem("userName")!);
  const firstThirdPupularCourse = popularCourses.slice(0, 3);
  const firstSeventhTopMentor = topMentors.slice(0, 7);
  return (
    <>
      <div>
        <div className="bg-blue-600 w-full h-52 rounded-bl-2xl rounded-br-3xl relative p-3">
          <h1 className="text-3xl font-bold relative top-6 ">hi,{userName}</h1>
          <p className="text-base relative top-7 ">Let's start learning!</p>
          <img
            className="bg-white rounded-full w-10 h-10 absolute right-3 top-12"
            src="/icons/bell.png"
            alt="bell image"
          />
          <div className=" flex items-center bg-white rounded-lg relative top-16 border-2 border-transparent focus-within:border-slate-700">
            <img
              className="w-6 h-6 ps-0.5"
              src="/icons/search.png"
              alt="searchicon"
            />
            <input
              placeholder="search"
              className="ps-0.5 py-2 bg-transparent w-full outline-none border-none text-black"
              type="search"
            />
          </div>
        </div>

        <div className="p-3 mt-1">
          {NavbarForSubject({
            subjectName: "Categories",
            suggestion: "See all",
            handleOnclick: () => {
              navigate("/layoutseeall/allcategorie");
            },
          })}

          <div className="flex  gap-5 mt-5 overflow-x-auto">
            {firstNineObjects.map((categorie: categorietype2) => {
              return Categories({
                img: `http://localhost:4003${categorie.img}`,
                subject: categorie.categorieName,
                key: categorie._id,
              });
            })}
          </div>
          {NavbarForSubject({
            subjectName: "Pupular Course",
            suggestion: "See all",
            handleOnclick: () => {
              navigate("/layoutseeall/allpupularcourse")
            },
          })}

          <div className="flex mt-5 overflow-x-auto gap-5">
            {firstThirdPupularCourse?.length > 0 &&
              firstThirdPupularCourse.map((course: PupularCourseType) => {
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
          </div>
          {NavbarForSubject({
            subjectName: "Top Mentor",
            suggestion: "See all",
            handleOnclick: () => {
              navigate("/layoutseeall/alltopmentor")
            },
          })}

          <div className="flex overflow-x-auto gap-8 mt-5">
            {firstSeventhTopMentor?.length > 0 &&
              firstSeventhTopMentor.map((mentor: mentortyp) => {
                return TopMentor({
                  image: `http://localhost:4003${mentor.topMentorImage}`,
                  name: mentor.topMentorName,
                  key: mentor._id,
                });
              })}
          </div>

          {NavbarForSubject({
            subjectName: "Continue Learning",
            suggestion: "See all",
            handleOnclick: () => {},
          })}

          <div className="flex border p-2 gap-2 border-slate-400 rounded-lg w-full h-40 mb-20">
            <img
              className="w-1/2 object-cover rounded-md"
              src="/imagehome/teacher.png"
              alt="image"
            />
            <div className="flex flex-col gap-1">
              <button className="p-1 bg-orange-200 rounded-xl text-orange-400 w-fit">
                Design
              </button>
              <h1 className="text-md font-medium">Introduction of Figma</h1>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/imagehome/profile.png"
                  alt="profilr png"
                />
                <p>Mehdi moradi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
