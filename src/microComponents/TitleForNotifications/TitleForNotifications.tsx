import {TitleForNotificationsType} from "./type"
export const TitleForNotifications:React.FC<TitleForNotificationsType>=({day,className})=>{
    return (
        <div className={`flex items-center justify-between w-full ${className}`}>
            <h3 className="text-slate-400">{day}</h3>
            <button className="text-blue-700">Mark all as read</button>
        </div>
    )
}