import { BookMarkComponentType } from "./type"
export const BookMarkComponent:React.FC<BookMarkComponentType>=({
    courseImageAddress,
    corseSubject,
    mentorImageAddress,
    mentorName,
    courseprice,
    onClick
})=>{
    
      
    return (
        <div className="flex border border-slate-400  p-2 gap-2  rounded-lg h-40  bg-white text-black w-fit sm:w-96 ">
            <img
              className="w-1/2 object-cover rounded-md"
              src={courseImageAddress}
              alt="image"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 md:justify-between">
                <h1 className="font-medium text-sm">{corseSubject}</h1>
                <button className="bg-blue-700 text-sm text-white p-1 rounded-3xl" onClick={onClick}>
                    Remove
                </button>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mentorImageAddress}
                  alt="profilr png"
                />
                <p>{mentorName}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-blue-600">{courseprice}</p>
                <button className="p-1 bg-slate-400 text-yellow-300 text-xs rounded-lg">
                  Best selers
                </button>
              </div>
            </div>
          </div>
    )
}