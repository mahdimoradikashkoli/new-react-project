import {mentorInfoType} from "./type"
export const MentorInfo:React.FC<mentorInfoType>=({mentorImgAddress,mentorName,onclickChatIcon,onclickPhoneIcon,subjectCourse})=>{
    return (
        <div className="mt-2 flex justify-between items-center w-full sm:w-96 p-2 bg-white text-black rounded-lg shadow-md">
            <div className="flex items-center  gap-2">
              <img
                className="rounded-full w-12 h-12"
                src={mentorImgAddress}
                alt="teacher"
              />
              <div>
                <h3 className="font-medium text-md">{mentorName}</h3>
                <h3 className="text-sm">{subjectCourse}</h3>
              </div>
            </div>
            <div className="flex gap-3">
              <img
              onClick={onclickPhoneIcon}
                className="rounded-full w-12 h-12"
                src="/icons/call.png"
                alt="call image"
              />
              <img
              onClick={onclickChatIcon}
                className="rounded-full w-12 h-12"
                src="/icons/message.png"
                alt="message image"
              />
            </div>
          </div>
    )
}