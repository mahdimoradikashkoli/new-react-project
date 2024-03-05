import { searchType } from "./type";
export const Search: React.FC<searchType> = ({
  searchtitle,
  className,
  onClickSearch,
  seggestions,
  onBlur,
  onClickSearchIcon,
  navigateToSearchResult
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className={`${className}`}>
        <img
        onClick={onClickSearchIcon}
          className="w-6 h-6 ps-0.5 cursor-pointer"
          src="/icons/search.png"
          alt="searchicon"
        />
        <input
          onBlur={onBlur}
          onClick={onClickSearch}
          placeholder={`${searchtitle}`}
          className="ps-0.5 py-2 bg-transparent w-full outline-none border-none text-black"
          type="search"
        />
      </div>
      {seggestions && (
        <ul className="bg-slate-400 h-fit max-w-80 p-2 text-slate-700 rounded-lg">
          <li className="cursor-pointer" onClick={navigateToSearchResult}>{seggestions}</li>
        </ul>
      )}
    </div>
  );
};
