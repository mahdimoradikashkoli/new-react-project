import { useNavigate, useParams } from "react-router-dom";

const DoingChat = () => {
  const navigate = useNavigate();
  const { handleBack } = useParams();
  const handleBackaddress = () =>
    handleBack === "mentor-detailes"
      ? navigate("/mentor-details/back-home")
      : handleBack === "see-all-mentor"
      ? navigate("/layoutseeall/alltopmentor")
      : (handleBack === "search-mentor") ? navigate("/search/mentor-and-course/course") : (handleBack === "coursedetailes")? navigate("/coursedetailes/course"):navigate("/chat");

  return (
    <>
      <div className="bg-blue-500 w-full h-40 px-3 pt-6">
        <div className="flex">
          <div className="flex-1 flex items-center gap-4">
            <img
              onClick={handleBackaddress}
              className="w-10 h-10 rounded-full cursor-pointer"
              src="/icons/back.jpg"
              alt="back icon"
            />
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="/imagehome/girl.png"
                alt="user image"
              />
              <div className="flex flex-col">
                <h5>albert Floers</h5>
                <span className="text-xs">Online</span>
              </div>
            </div>
          </div>
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="/icons/setting.png"
            alt="setting icon"
          />
        </div>
      </div>
      <div className="w-full h-screen bg-white text-black rounded-t-3xl relative -top-10"></div>
      <div className="fixed bottom-0 left-0 right-0 p-3 flex flex-col justify-center bg-white border-t border-slate-400 rounded-t-3xl">
        <div className="flex items-center gap-1">
          <input
            className="w-full p-2 rounded-lg outline-none border border-transparent focus:border-blue-600 text-black bg-slate-300"
            type="text"
            placeholder="writh somting"
          />
          <input
            className="cursor-pointer w-fit p-2 rounded-lg bg-blue-600 text-white"
            type="submit"
            value="Send"
          />
        </div>
      </div>
    </>
  );
};
export default DoingChat;
