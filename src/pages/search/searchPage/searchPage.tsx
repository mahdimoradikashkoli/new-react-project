import { CourseComponent, SearchNavbar } from "../../../components";

const SearchPage = () => {
  return (
    <>
      <SearchNavbar backaddress="/" />
      <div className="px-3 mt-20">
        <h1 className="font-medium text-lg">Recent Search</h1>
        <div className="flex flex-col gap-2 mt-1 h-40 overflow-y-auto">
          <div className="flex justify-between items-center md:w-96 p-1 rounded-lg bg-white">
            <span className="text-slate-500">UI UX Course</span>
            <img
              className="w-7 h-7 rounded-full"
              src="/icons/multiple.png"
              alt="multiple icon"
            />
          </div>
          <div className="flex justify-between items-center md:w-96 p-1 rounded-lg bg-white">
            <span className="text-slate-500">Social media marketing</span>
            <img
              className="w-7 h-7 rounded-full"
              src="/icons/multiple.png"
              alt="multiple icon"
            />
          </div>
          <div className="flex justify-between items-center md:w-96 p-1 rounded-lg bg-white">
            <span className="text-slate-500">Social media marketing</span>
            <img
              className="w-7 h-7 rounded-full"
              src="/icons/multiple.png"
              alt="multiple icon"
            />
          </div>
        </div>
        <h1 className="font-medium text-lg">Recent View</h1>
        <div className="flex flex-col gap-2 sm:flex-row mt-1 sm:flex-wrap">
          <CourseComponent
            corseSubject="Introduction of figma"
            courseImageAddress="/imagehome/teacher.png"
            courseprice="$2000.00"
            mentorImageAddress="/imagehome/girl.png"
            mentorName="Ali Baghery"
          />
          <CourseComponent
            corseSubject="Introduction of figma"
            courseImageAddress="/imagehome/teacher.png"
            courseprice="$2000.00"
            mentorImageAddress="/imagehome/girl.png"
            mentorName="Ali Baghery"
          />
          <CourseComponent
            corseSubject="Introduction of figma"
            courseImageAddress="/imagehome/teacher.png"
            courseprice="$2000.00"
            mentorImageAddress="/imagehome/girl.png"
            mentorName="Ali Baghery"
          />
          <CourseComponent
            corseSubject="Introduction of figma"
            courseImageAddress="/imagehome/teacher.png"
            courseprice="$2000.00"
            mentorImageAddress="/imagehome/girl.png"
            mentorName="Ali Baghery"
          />
          <CourseComponent
            corseSubject="Introduction of figma"
            courseImageAddress="/imagehome/teacher.png"
            courseprice="$2000.00"
            mentorImageAddress="/imagehome/girl.png"
            mentorName="Ali Baghery"
          />
          
        </div>
      </div>
    </>
  );
};
export default SearchPage;
