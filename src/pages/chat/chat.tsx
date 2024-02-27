import { FooterNavigation, Navigation, Search } from "../../components";
import "stream-chat-react/dist/css/v2/index.css";
import { UserComponent } from "./partials/userComponent";

const Chatting = () => {
  return (
    <>
      <div className="bg-blue-600 w-full h-52  px-3 pt-3 relative">
        <Navigation
          backAddress="/"
          subjectName="Chat"
          classNameSubjectName="!text-white"
        />
        <Search
          className="bg-slate-200 w-full flex items-center p-1 rounded-xl relative top-24"
          searchtitle="search Mentor"
        />
      </div>
      <div className="px-3 pt-3 flex flex-col gap-2 pb-20  text-black bg-white w-full rounded-t-3xl relative -top-6 h-screen overflow-y-auto">
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
        <UserComponent/>
      </div>
      <FooterNavigation classNameCHat="bg-blue-700" />
    </>
  );
};
export default Chatting;
