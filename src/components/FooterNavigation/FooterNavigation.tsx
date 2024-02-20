import { useNavigate } from "react-router-dom";
import { footerNavigationType } from "./type";
export const FooterNavigation: React.FC<footerNavigationType> = ({
  classNameBookMark,
  classNameCHat,
  classNameHome,
  classNameMycourse,
  classNameProfile
}) => {

    const navigate=useNavigate()
  return (
    <div className="fixed bottom-0 w-full bg-white h-20 rounded-t-lg flex items-center px-3 justify-around z-30">
      <img
        onClick={()=>navigate("/")}
        className={`w-12 h-12 cursor-pointer p-1 ${classNameHome}`}
        src="/footerimg/home.png"
        alt="Home"
      />
      <img
        onClick={() => navigate("/mycourse")}
        className={`w-12 h-12 cursor-pointer p-1  ${classNameMycourse}`}
        src="/footerimg/course.png"
        alt="course"
      />
      <img
        onClick={() => navigate("/bookmarks")}
        className={`w-12 h-10 cursor-pointer p-1  ${classNameBookMark}`}
        src="/footerimg/bookmark1.png"
        alt="bookmark"
      />
      <img
        onClick={() => navigate("")}
        className={`w-12 h-12 cursor-pointer p-1  ${classNameCHat}`}
        src="/footerimg/chat1.png"
        alt="chat"
      />
      <img
        onClick={() => navigate("")}
        className={`w-12 h-12 cursor-pointer p-1  ${classNameProfile}`}
        src="/footerimg/profile1.png"
        alt="profile"
      />
    </div>
  );
};
