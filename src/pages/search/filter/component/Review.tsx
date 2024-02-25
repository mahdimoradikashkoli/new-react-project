import {ReveiwType} from "./type"
export const Review:React.FC<ReveiwType>=({point})=>{
  
    return (
        <>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center justify-between sm:w-96">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img
                  className="w-7 h-7"
                  src="/imagehome/star.png"
                  alt="star icon"
                />
                <img
                  className="w-7 h-7"
                  src="/imagehome/star.png"
                  alt="star icon"
                />
                <img
                  className="w-7 h-7"
                  src="/imagehome/star.png"
                  alt="star icon"
                />
                <img
                  className="w-7 h-7"
                  src="/imagehome/star.png"
                  alt="star icon"
                />
                <img
                  className="w-7 h-7"
                  src="/imagehome/star.png"
                  alt="star icon"
                />
              </div>
              <p className="font-medium pt-2">{point}</p>
            </div>
            <input className="w-5 h-5" type="radio" />
          </div>
        </div>
        </>
    )
}