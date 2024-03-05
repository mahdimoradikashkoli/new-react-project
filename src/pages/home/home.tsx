import { ChangeEvent, useEffect, useState } from "react";
import {
  Categories,
  ContinueLearning,
  FooterNavigation,
  NavbarForSubject,
  PupularCourse,
  Search,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { categorietype2 } from "./type";
import { mentortyp } from "./type";
import { PupularCourseType } from "./type";
import { instance } from "../../App";

const HomePage: React.FC = () => {
  const [searchSeggestions,setSearchSeggestions]=useState("")
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popularCourses, setPopularCourses] = useState([]);
  const [topMentors, setTopMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categorieRes = await instance.get("/get/categorie");
        setCategories(categorieRes.data.msg);

        const pupularcourse = await instance.get("/get/pupuparcourse");
        setPopularCourses(pupularcourse.data.msg);

        const topMentor = await instance.get("/get/topmentor");
        setTopMentors(topMentor.data.msg);
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

  const searchValue=["art","marketing","cooding","business","accounting","science","English","math"]
  const handleOnBlue=(e:ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value
    const matchedSuggestions = searchValue.filter(word => word.includes(value));
    if(matchedSuggestions.length > 0){
      setSearchSeggestions(matchedSuggestions[0])
    }else{
      setSearchSeggestions("not found")
    }
    if(value === ""){
      setSearchSeggestions("")
    }
  }

  const userName = JSON.parse(localStorage.getItem("userName")!);
  return (
    <>
      <div>
        <div className="bg-blue-600 w-full h-52 rounded-b-3xl relative p-3">
          <h1 className="text-3xl font-bold relative top-6 ">hi,{userName}</h1>
          <p className="text-base relative top-7 ">Let's start learning!</p>
          <img
          onClick={()=>navigate("/notification/backhome")}
            className="bg-white rounded-full w-10 h-10 absolute right-3 top-12 cursor-pointer"
            src="/icons/bell.png"
            alt="bell image"
          />
          <div className="flex  gap-2 relative top-16 w-full">
            <Search
            navigateToSearchResult={()=>searchSeggestions === "not found"? "" :navigate("/search/mentor-and-course/serach-result")}
            onBlur={handleOnBlue}
              className="flex items-center bg-white rounded-lg w-full border-2 border-transparent focus-within:border-slate-700"
              searchtitle="search"
              seggestions={searchSeggestions}
            />
            <img
              onClick={() => navigate("/search/filter")}
              className="w-11 h-11 rounded-lg cursor-pointer"
              src="/icons/filter(1).png"
              alt="filter icon"
            />
          </div>
        </div>

        <div className="p-3 mt-1 pb-24">
          {NavbarForSubject({
            subjectName: "Categories",
            suggestion: "See all",
            handleOnclick: () => {
              navigate("/layoutseeall/allcategorie");
            },
          })}

          <div className="flex  gap-8 mt-5 overflow-x-auto">
            {categories.map((categorie: categorietype2) => {
              return Categories({
                onClick:()=>navigate("/search/mentor-and-course/home"),
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
              navigate(`/layoutseeall/allpupularcourse`);
            },
          })}

          <div className="flex mt-5 overflow-x-auto gap-5">
            {popularCourses?.length > 0 &&
              popularCourses.map((course: PupularCourseType) => {
                return (
                  <PupularCourse
                    key={course?._id}
                    image={`http://localhost:4003${course?.courseImageAddress}`}
                    description={course?.corseSubject}
                    teacherImg={`http://localhost:4003${course?.mentorImageAddress}`}
                    teacher={course?.mentorName}
                    price={course?.courseprice}
                    suggestion="Best sellers"
                    onClick={() => [
                      navigate(`/coursedetailes/back-home`),
                      localStorage.setItem(
                        "courseId",
                        JSON.stringify(course._id)
                      ),
                    ]}
                  />
                );
              })}
          </div>
          {NavbarForSubject({
            subjectName: "Top Mentor",
            suggestion: "See all",
            handleOnclick: () => {
              navigate("/layoutseeall/alltopmentor");
            },
          })}

          <div className="flex overflow-x-auto gap-8 mt-5">
            {topMentors?.length > 0 &&
              topMentors.map((mentor: mentortyp) => {
                return (
                  <div
                  onClick={()=>navigate("/mentor-details/back-home")}
                    key={mentor?._id}
                    className="flex flex-col items-center flex-shrink-0 cursor-pointer"
                  >
                    <img
                      className="w-16 h-16 object-cover rounded-full"
                      src={`http://localhost:4003${mentor?.topMentorImage}`}
                      alt="mentor image"
                    />
                    <p className="text-base">{mentor?.topMentorName}</p>
                  </div>
                );
              })}
          </div>

          {NavbarForSubject({
            subjectName: "Continue Learning",
            suggestion: "See all",
            handleOnclick: () => {navigate("/layoutseeall/allcontinuelearning")},
          })}

          <div className="flex items-center gap-8 overflow-x-auto">
            <ContinueLearning
            onClickCourseImage={()=> navigate("/coursedetailes/home")}
              courseImage="/imagehome/teacher.png"
              className="mt-5 flex-shrink-0"
              NumberOfLessons={25}
              NumberOfLessonsRead={23}
              courseTitle="introduction of figma"
              mentorImage="/imagehome/girl.png"
              mentorName="Roberto Grean"
              progressBar={78}
            />
            <ContinueLearning
            onClickCourseImage={()=> navigate("/coursedetailes/home")}
              courseImage="/imagehome/teacher.png"
              className="mt-5  flex-shrink-0"
              NumberOfLessons={25}
              NumberOfLessonsRead={23}
              courseTitle="introduction of figma"
              mentorImage="/imagehome/girl.png"
              mentorName="Roberto Grean"
              progressBar={78}
            />
            <ContinueLearning
            onClickCourseImage={()=> navigate("/coursedetailes/home")}
              courseImage="/imagehome/teacher.png"
              className="mt-5 flex-shrink-0"
              NumberOfLessons={25}
              NumberOfLessonsRead={23}
              courseTitle="introduction of figma"
              mentorImage="/imagehome/girl.png"
              mentorName="Roberto Grean"
              progressBar={78}
            />
            <ContinueLearning
            onClickCourseImage={()=> navigate("/coursedetailes/home")}
              courseImage="/imagehome/teacher.png"
              className="mt-5 flex-shrink-0"
              NumberOfLessons={25}
              NumberOfLessonsRead={23}
              courseTitle="introduction of figma"
              mentorImage="/imagehome/girl.png"
              mentorName="Roberto Grean"
              progressBar={78}
            />
          </div>
        </div>
      </div>
      <FooterNavigation classNameHome="!border-blue-700" />
    </>
  );
};
export default HomePage;
