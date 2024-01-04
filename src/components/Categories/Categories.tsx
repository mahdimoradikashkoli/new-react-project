import { CategoriesType } from "./type";
export const Categories: React.FC<CategoriesType> = ({ img, subject, key }) => {
  return (
    <div key={key} className="flex flex-col flex-shrink-0 items-center gap-1">
      <img
        className="rounded-full w-16 h-16 bg-white"
        src={img}
        alt="Art image"
      />
      <p>{subject}</p>
    </div>
  );
};
