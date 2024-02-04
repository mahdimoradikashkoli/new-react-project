import {lessonsInformationType} from "./type"
export const LessonsInformation:React.FC<lessonsInformationType>=({section,subject,timeLesson})=>{
    return (
        <div className="flex items-center justify-between mt-3">
            <h3 className="text-slate-500 font-medium">
              {`${section} - ${subject}`}
            </h3>
            <p className="text-lg font-bold text-blue-500">{`${timeLesson} Min`}</p>
          </div>
    )
}