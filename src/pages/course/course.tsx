import { useContext, useEffect, useState } from "react";
import { Button, Navigation } from "../../components";
import { store } from "../../contexts";
import { instance } from "../../App";
import { courseInfoType } from "..";
import { LessonsInformation, Lessons } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
import { MyShareButtons } from "./partials/myShareButton";

const Course: React.FC = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState("Lessons");
  const { curentSong, stopSong } = useContext(store);
  const { params } = useParams();

  const stopCurentSong = () => {
    if (curentSong) {
      stopSong(curentSong);
    }
  };

  const [courseInfo, setCoursInfo] = useState<courseInfoType>(
    {} as courseInfoType
  );

  const courseId = JSON.parse(localStorage.getItem("courseId")!);
  useEffect(() => {
    if (params! === "certificate") {
      setShowTitle("Certificate");
    }
    const fetchData = async () => {
      const data = await instance.get(`/coursedetailes/${courseId}`);
      setCoursInfo(data.data.courseDetailes);
    };
    fetchData();
  }, [courseId, params]);

  const handleDownloadCertificate = () => {
    const imgUrl = "/image/certificate.png";
    fetch(imgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "certificate.png");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      });
  };
  const handleShareCertificate = () => {
    const shareNavbar = document.querySelector("#sharenavbar");
    if (shareNavbar) {
      $(shareNavbar)?.fadeIn("slow");
    }
  };

  

  

  return (
    <>
      <Navigation
        onClick={stopCurentSong}
        backAddress="/coursedetailes"
        subjectName="course"
      />
      {showTitle === "Certificate" && (
        <img
          onClick={() => handleShareCertificate()}
          className="w-10 h-10 rounded-full fixed top-3 right-3 z-40"
          src="/icons/sharepng.png"
          alt="share"
        />
      )}
      {MyShareButtons()}
      <div className="p-3 fixed left-0 right-0  top-14">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => setShowTitle("Lessons")}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "Lessons" && "text-blue-800"
              }`}
            >
              Lessons
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40  ${
                  showTitle === "Lessons"
                    ? "border-blue-700"
                    : "border-transparent"
                }`}
              />
            }
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1
              onClick={() => {
                setShowTitle("Certificate"), stopCurentSong();
              }}
              className={`text-lg font-medium cursor-pointer ${
                showTitle === "Certificate" && "text-blue-800"
              }`}
            >
              Certificate
            </h1>
            {
              <hr
                className={`border-t-4 rounded-t-3xl w-40  ${
                  showTitle === "Certificate"
                    ? "border-blue-700"
                    : "border-transparent"
                }`}
              />
            }
          </div>
        </div>
        <hr />
        <div className="p-2 w-full h-screen flex flex-col overflow-y-auto gap-2 mt-4 pb-60  ">
          {showTitle === "Certificate" && (
            <img
              className="object-cover sm:w-96"
              src="/image/certificate.png"
              alt="certificate image"
            />
          )}
          {showTitle === "Lessons" && (
            <>
              <LessonsInformation
                section="section 01"
                subject="Play socure"
                timeLesson="10"
              />
              <Lessons
                LessonNumber="01"
                src={`http://localhost:4003/${courseInfo!.lessonOneAddress}`}
                subjectLesson={courseInfo!.subjectOne}
              />
              <Lessons
                LessonNumber="02"
                src={`http://localhost:4003/${courseInfo!.lessonToweAddress}`}
                subjectLesson={courseInfo!.subjectTowe}
              />
              <LessonsInformation
                section="section 02"
                subject="Learning Fotball"
                timeLesson="20"
              />
              <Lessons
                LessonNumber="03"
                src={`http://localhost:4003/${courseInfo!.lessonThreeAddress}`}
                subjectLesson={courseInfo!.subjectThree}
              />
              <Lessons
                LessonNumber="04"
                src={`http://localhost:4003/${courseInfo!.lessonForAddress}`}
                subjectLesson={courseInfo!.subjectFor}
              />
              <Lessons
                LessonNumber="05"
                src={`http://localhost:4003/${courseInfo!.lessonFiveAddress}`}
                subjectLesson={courseInfo!.subjectFive}
              />
              <Lessons
                LessonNumber="06"
                src={`http://localhost:4003/${courseInfo!.lessonSixAddress}`}
                subjectLesson={courseInfo!.subjectSix}
              />
              <LessonsInformation
                section="section 03"
                subject="Final Review"
                timeLesson="40"
              />
              <Lessons
                LessonNumber="07"
                src={`http://localhost:4003/${courseInfo!.lessonSevenAddress}`}
                subjectLesson={courseInfo!.subjectSeven}
              />
              <Lessons
                LessonNumber="08"
                src={`http://localhost:4003/${courseInfo!.lessonEightAddress}`}
                subjectLesson={courseInfo!.subjectEight}
              />
              <Lessons
                LessonNumber="09"
                src={`http://localhost:4003/${courseInfo!.lessonNineAddress}`}
                subjectLesson={courseInfo!.subjectNine}
              />
            </>
          )}
        </div>
      </div>
      <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-4 px-3  items-center justify-between">
        <Button
          onClick={
            showTitle === "Lessons"
              ? () => {
                  navigate("/coursedetailes"), stopCurentSong();
                }
              : handleDownloadCertificate
          }
          className="text-black font-medium"
          variant="contained"
          children={
            showTitle === "Lessons"
              ? `Start Course Again`
              : "Download Certificate"
          }
        />
      </div>
    </>
  );
};
export default Course;
