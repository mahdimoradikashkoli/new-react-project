import { useNavigate } from "react-router-dom";
import { Button, Navigation } from "../../../components";

const PaymentResult = () => {
    const navigate=useNavigate()
  return (
    <>
      <Navigation backAddress="/payment/reviewsummery/Paypal" />
      <div className="flex flex-col items-center  justify-center w-full h-screen px-3">
        <img
          className="rounded-full w-32 h-32"
          src="/icons/tic.png"
          alt="tic image"
        />
        <h2 className="text-lg font-medium ">Congratulations!</h2>
        <p className="text-slate-500 text-center text-sm">
          You have successfully made payment and enrolled the course.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t-2 fixed bottom-0 w-full flex flex-col  bg-white rounded-t-2xl py-2 px-3  items-center justify-between">
          <Button onClick={()=>navigate("/payment/electronicreceipt")} children="View E-Receipt" variant="contained" />
          <Button className="text-black" onClick={()=>navigate("/coursedetailes")} children="Go to course" />
        </div>
      </div>
    </>
  );
};
export default PaymentResult;
