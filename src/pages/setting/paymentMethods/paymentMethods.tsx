import { useNavigate } from "react-router-dom";
import { Navigation } from "../../../components";

const PaymentMethods = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation backAddress="/profile/user" subjectName="Payment Methods" />
      <div className="px-3 pb-3 pt-16">
        <h1 className="font-bold text-xl ">Credit & Debit Card</h1>
        <div className="flex mt-3 items-center justify-between p-2 bg-slate-200 rounded-lg">
          <button
            onClick={() => {
              navigate("");
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
          <a className="text-blue-700 font-medium" href="">
            Link
          </a>
        </div>

        <h1 className="mt-3 font-bold text-xl ">More Peyment Options</h1>
        <div className="flex flex-col mt-3 gap-3">
          <div className="w-full bg-white p-2 rounded-lg flex items-center gap-3">
            <button
              onClick={() => navigate("")}
              className="flex items-center flex-1 gap-2"
            >
              <img
                className="rounded-md w-10 h-10"
                src="/icons/paypal.png"
                alt="papal logo"
              />
              <p className="text-slate-500 text-base">Paypal</p>
            </button>
            <a className="text-blue-700 font-medium" href="">
              Link
            </a>
          </div>
          <div className="w-full bg-white p-2 rounded-lg flex items-center gap-3">
            <button
              onClick={() => navigate("")}
              className="flex items-center flex-1 gap-2"
            >
              <img
                className="rounded-md w-10 h-10"
                src="/icons/apple.png"
                alt="papal logo"
              />
              <p className="text-slate-500 text-base">Paypal</p>
            </button>
            <a className="text-blue-700 font-medium" href="">
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentMethods;
