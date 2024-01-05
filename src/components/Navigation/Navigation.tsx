import { useNavigate } from "react-router-dom"

type navigationType={
    backAddress:string,
    subjectName:string
}
export const Navigation:React.FC<navigationType>=({backAddress,subjectName})=>{
const navigate=useNavigate()
    return (
        <div className="flex items-center w-full fixed top-3 left-3  z-10">
          <button
            onClick={() => {
              navigate(`${backAddress}`);
            }}
          >
            <img
              className="w-10 h-10 rounded-full"
              src="/icons/back.jpg"
              alt="back img"
            />
          </button>
          <h2 className="text-2xl font-medium ml-20 text-yellow-400">{subjectName}</h2>
        </div>
    )
}