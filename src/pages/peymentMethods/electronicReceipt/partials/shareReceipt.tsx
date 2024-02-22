import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
  } from "react-share";
  import $ from "jquery";

export const ShareReceipt=()=>{
    const shareUrl =document.querySelector("#receipt")
   const shareUrlInnerHtml=shareUrl?.innerHTML
    const closeShareNavbar = () => {
        const shareNavbar = document.querySelector("#sharenavbar");
        if (shareNavbar) {
          $(shareNavbar)?.fadeOut("slow");
        }
      };
    return (
        <div
          id="sharenavbar"
          className="fixed bottom-0 left-0 right-0 w-full h-fit p-4 pb-5 bg-white border-t-2 border-blue-700 rounded-t-3xl z-30  hidden"
        >
          <div className="flex flex-col w-full">
            <div className="flex justify-end">
              <button
                onClick={closeShareNavbar}
                className="  w-fit p-1 bg-blue-700 rounded-lg"
              >
                close
              </button>
            </div>
            <div className=" flex justify-center  gap-10">
              <FacebookShareButton url={shareUrlInnerHtml!}>
                <img
                  src="/icons/facebook.png"
                  alt="facebook"
                  className="bg-white w-10 h-10 rounded-full"
                />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrlInnerHtml!}>
                <img
                  src="/icons/tiwter.png"
                  alt="twitter"
                  className="bg-white w-10 h-10 rounded-full"
                />
              </TwitterShareButton>
              <TelegramShareButton url={shareUrlInnerHtml!}>
                <img
                  src="/icons/telgram.png"
                  alt="telegram"
                  className="bg-white w-10 h-10 rounded-full"
                />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      );
}