import { Navigation } from "../../../components";
import { useNavigate } from "react-router-dom";

const PeymentMethods = () => {
  const Navigate = useNavigate();
  
  return (
    <>
      <Navigation
        backAddress="/coursedetailes"
        subjectName="Peyment Methods"
      />
      <div className="px-3 pb-3 pt-16">
        <h1 className="font-bold text-xl ">Credit & Debit Card</h1>
        <div className="flex mt-3 items-center justify-between p-2 bg-slate-200 rounded-lg">
          <button
            onClick={() => {
              Navigate("/payment/addcard");
            }}
            className="flex items-center gap-3"
          >
            <img
              className="w-10 h-10"
              src="/icons/card2.png"
              alt="card image"
            />
            <p className="text-slate-500 text-base">Add New Card</p>
          </button>
        </div>
        <h1 className="font-bold text-xl mt-3">My Cards</h1>

        <h1 className="mt-3 font-bold text-xl ">More Peyment Options</h1>
        <div className="flex flex-col mt-3 gap-3">
          <button
            onClick={() => Navigate("/payment/reviewsummery/Peypal")}
            className="w-full bg-white p-2 rounded-lg flex items-center gap-3"
          >
            <img
              className="rounded-md w-10 h-10"
              src="/icons/paypal.png"
              alt="papal logo"
            />
            <p className="text-slate-500 text-base">Paypal</p>
          </button>
          <button
            onClick={() => Navigate("/payment/reviewsummery/Apple")}
            className="w-full bg-white p-2 rounded-lg flex items-center gap-3"
          >
            <img
              className="rounded-md w-10 h-10"
              src="/icons/apple.png"
              alt="apple logo"
            />
            <p className="text-slate-500 text-base">Apple Pay</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default PeymentMethods;
