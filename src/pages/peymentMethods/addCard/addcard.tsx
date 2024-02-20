import { useNavigate } from "react-router-dom";
import { Button, Navigation, Textfield } from "../../../components";
const AddCard = () => {
 
const navigate=useNavigate()
  
  return (
    <>
      <Navigation
        backAddress="/payment/peymentmethods"
        subjectName="Add Card"
      />
      <form
        className="px-3 pb-20 pt-16 flex flex-col gap-3"
      >
        <img className="w-96 h-60" src="/image/card2.png" alt="card image" />
        <Textfield  label="Card Holder Name" placeholder="esther Howard" />
        <Textfield   label="Card Number" placeholder="4716 9627 1653 8047" />
        <div className="flex gap-2 ">
          <Textfield   label="Expiry Date" placeholder="02/30" />
          <Textfield   label="CVV" placeholder="342" />
        </div>
        <div className="flex flex-col items-center">
          <div className="border-t-2 fixed bottom-0 w-full flex bg-white rounded-t-2xl py-2 px-3  items-center justify-between">
            <Button
              children="Add Card"
              variant="contained"
              onClick={()=>navigate("/payment/reviewsummery/Peypal")}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default AddCard;
