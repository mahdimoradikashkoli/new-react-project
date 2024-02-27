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
    <div className="fixed bottom-0 w-full bg-white border-t-2 shadow-lg h-20 rounded-t-lg flex items-center px-3 justify-around z-30">
      <img
        onClick={()=>navigate("/")}
        className={`w-12 h-12 cursor-pointer border-2 border-transparent ${classNameHome}`}
        src="/footerimg/home.png"
        alt="Home"
      />
      <img
        onClick={() => navigate("/mycourse")}
        className={`w-12 h-12 cursor-pointer border-2 border-transparent  ${classNameMycourse}`}
        src="/footerimg/course.png"
        alt="course"
      />
      <img
        onClick={() => navigate("/bookmarks")}
        className={`w-12 h-10 cursor-pointer border-2 border-transparent  ${classNameBookMark}`}
        src="/footerimg/bookmark1.png"
        alt="bookmark"
      />
      <img
        onClick={() => navigate("/chat")}
        className={`w-12 h-12 cursor-pointer border-2 border-transparent  ${classNameCHat}`}
        src="/footerimg/chat1.png"
        alt="chat"
      />
      <img
        onClick={() => navigate("")}
        className={`w-12 h-12 cursor-pointer border-2 border-transparent  ${classNameProfile}`}
        src="/footerimg/profile1.png"
        alt="profile"
      />
    </div>
  );
};
