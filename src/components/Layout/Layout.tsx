import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <div className="fixed bottom-0 w-full bg-white h-20 rounded-t-lg flex items-center px-3 justify-around">
        <img className="w-12 h-12" src="/footerimg/home.png" alt="Home" />
        <img className="w-12 h-12" src="/footerimg/course.png" alt="course" />
        <img className="w-12 h-10" src="/footerimg/bookmark1.png" alt="bookmark" />
        <img className="w-12 h-12" src="/footerimg/chat1.png" alt="chat" />
        <img className="w-12 h-12" src="/footerimg/profile1.png" alt="profile" />
      </div>
    </div>
  );
};
export default Layout;
