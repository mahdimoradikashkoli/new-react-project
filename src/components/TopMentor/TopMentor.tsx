import {TopMentorType} from "./type"
export const TopMentor:React.FC<TopMentorType>=({image,name})=>{
    return (
        <div className="flex flex-col items-center flex-shrink-0">
          <img className="w-20 h-20 rounded-full" src={image} alt="image" />
          <p className="">{name}</p>
        </div>
    )
}