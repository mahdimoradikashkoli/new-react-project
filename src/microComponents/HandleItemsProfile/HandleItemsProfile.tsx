import { HandleItemsType } from "./type";
export const HandleItems: React.FC<HandleItemsType> = ({
  itemIcon,
  itemName,
  onClick,
}) => {
  return (
    <div className="flex items-center p-2 sm:w-96 bg-slate-100 text-black shadow-lg rounded-lg">
      <div className="flex items-center gap-3 flex-1">
        <img className="w-8 h-8 rounded-full" src={itemIcon} alt="profile" />
        <span className="text-md">{itemName}</span>
      </div>
      <img
        onClick={onClick}
        className="w-8 h-8 cursor-pointer"
        src="/icons/arrow.png"
        alt="arrow icon"
      />
    </div>
  );
};
