import {messageNotificationType} from "./type"
export const MessageNotification: React.FC<messageNotificationType> = ({
  descMessage,
  imageNotification,
  receiveTime,
  titleMesaage,
  className
}) => {
  return (
    <div className={`flex w-fit bg-white p-1 rounded-md shadow-xl border-b-2 border-slate-400 ${className}`}>
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-16 h16 object-cover"
          src={imageNotification}
          alt="certificate icon"
        />
        <div className="flex flex-col gap-0.5">
          <h1 className="text-lg text-black">{titleMesaage}</h1>
          <p className="text-slate-500 text-xs tracking-tight">{descMessage}
          </p>
        </div>
      </div>
      <span className="text-slate-500 text-sm">{receiveTime}</span>
    </div>
  );
};
