import {searchType} from "./type"
export const Search: React.FC<searchType> = ({ searchtitle, className ,onClickSearch}) => {
  return (
    <div className={`${className}`}>
      <img
        className="w-6 h-6 ps-0.5"
        src="/icons/search.png"
        alt="searchicon"
      />
      <input
      onClick={onClickSearch}
        placeholder={`${searchtitle}`}
        className="ps-0.5 py-2 bg-transparent w-full outline-none border-none text-black"
        type="search"
      />
    </div>
  );
};
