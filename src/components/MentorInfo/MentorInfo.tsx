import { mentorInfoType } from "./type";
export const MentorInfo: React.FC<mentorInfoType> = ({
  mentorImgAddress,
  mentorName,
  onclickChatIcon,
  onclickPhoneIcon,
  subjectCourse,
  className,
  unikId,
  onClick
}) => {
  return (
    <div
      key={unikId}
      className={`flex justify-between items-center w-full sm:w-96 px-4 py-1 bg-white text-black rounded-lg shadow-md ${className}`}
    >
      <div  className="flex items-center gap-2">
        <img
        onClick={onClick}
          className="rounded-full w-12 h-12 cursor-pointer"
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
          className="rounded-full w-9 h-9 cursor-pointer"
          src="/icons/call.png"
          alt="call image"
        />
        <img
          onClick={onclickChatIcon}
          className="rounded-full w-9 h-9 cursor-pointer"
          src="/icons/message.png"
          alt="message image"
        />
      </div>
    </div>
  );
};
