import {NavbarForSubjectType} from "./type"
export const NavbarForSubject:React.FC<NavbarForSubjectType>=({subjectName,suggestion,handleOnclick})=>{
    return (
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-xl ">{subjectName}</h1>
          <button onClick={handleOnclick} className="text-lg text-yellow-500">{suggestion}</button>
        </div>
    )
}