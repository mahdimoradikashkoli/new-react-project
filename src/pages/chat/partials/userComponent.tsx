import { useNavigate } from "react-router-dom"

export const UserComponent=()=>{
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate("/chat/pv/personlpage")} className="p-3 flex border rounded-lg shadow-lg cursor-pointer">
          <div className="flex items-center gap-2 flex-1">
            <img
              className="w-10 h-10 rounded-full"
              src="/imagehome/girl.png"
              alt="user image"
            />
            <div className="flex flex-col ">
              <h5 className="text-lg font-medium">Carlaschohen</h5>
              <span className="text-sm text-slate-500">prefect, will check it</span>
            </div>
            
          </div>
          <span className="items-end text-slate-600 ">09:34 AM</span>
        </div>
    )
}