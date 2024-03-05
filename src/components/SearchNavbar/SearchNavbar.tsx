import { useNavigate } from "react-router-dom"
import {searchNavbarType} from "./type"
export const SearchNavbar:React.FC<searchNavbarType>=({onChange,backaddress})=>{
    const navigate=useNavigate()
    return (
        <div className="flex fixed top-3 left-3 right-3 z-20 w-full gap-10  ">
        <img
          onClick={() => navigate(`${backaddress}`)}
          className="w-10 h-10 rounded-full cursor-pointer"
          src="/icons/back.jpg"
          alt="back icon"
        />
        <div className="flex p-1 bg-slate-300  border-2 border-transparent focus-within:border-blue-700 rounded-xl items-center sm:w-96">
          <img
            className="w-8 h-8 rounded-full"
            src="/icons/search.png"
            alt="search icon"
          />
          <input
          onChange={onChange}
            placeholder="search"
            className="bg-transparent outline-none border-none text-black w-full h-full"
            type="search"
          />
        </div>
      </div>
    )
}