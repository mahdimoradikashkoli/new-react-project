import $ from "jquery";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

export const ShareCourse = () => {
  const shareUrl = "http://localhost:5173/coursedetailes/md";

  const handleHideShareNavbar = () => {
    const handleShare = document.getElementById("handleShare");
    if (handleShare) {
      $(handleShare).fadeOut("slow");
    }
  };
  return (
    <div
      id="handleShare"
      className="hidden fixed bottom-0 left-0 right-0 p-3 bg-white rounded-t-3xl border-t-2 shadow-md w-full"
    >
      <div className="flex items-center justify-end">
        <button
          onClick={handleHideShareNavbar}
          className="px-3 py-1 bg-blue-700 text-white w-fit rounded-lg "
        >
          close
        </button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <FacebookShareButton url={shareUrl}>
          <img
            className="w-10 h-10 rounded-full"
            src="/icons/facebook.png"
            alt="facebook icon"
          />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <img
            className="w-10 h-10 rounded-full"
            src="/icons/tiwter.png"
            alt="twitter"
          />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <img
            src="/icons/telgram.png"
            alt="telegram"
            className="bg-white w-10 h-10 rounded-full"
          />
        </TelegramShareButton>
      </div>
    </div>
  );
};
