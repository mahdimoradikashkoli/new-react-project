import { CategoriesType } from "./type";
export const Categories: React.FC<CategoriesType> = ({ img, subject, key ,onClick}) => {
  return (
    <div key={key}  className="flex flex-col flex-shrink-0 items-center gap-1">
      <img
      onClick={onClick}
        className="rounded-full w-16 h-16 bg-white cursor-pointer"
        src={img}
        alt="Art image"
      />
      <p>{subject}</p>
    </div>
  );
};
