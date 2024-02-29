import { useNavigate } from "react-router-dom";
import { Button, FooterNavigation, Navigation } from "../../components";
import { HandleItems } from "../../microComponents";
import $ from "jquery";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    const logoutDiv=document.getElementById("logoutDiv")
    if(logoutDiv){
      $(logoutDiv).fadeIn("slow")
    }
  }
  const handleCancelLogout=()=>{
    const logoutDiv=document.getElementById("logoutDiv")
    if(logoutDiv){
      $(logoutDiv).fadeOut("slow")
    }
  }
  return (
    <>
      <Navigation backAddress="/" subjectName="Profile" />
      <div className="px-3 pt-20 pb-24">
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src="/imagehome/girl.png"
              alt="user profile"
            />
            <span className="font-medium text-lg">Jacob Jones</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 sm:justify-center sm:items-center">
          <HandleItems
            itemIcon="/imagehome/profile.png"
            itemName="Your Profile"
            onClick={() => navigate("/profile/userprofile")}
          />
          <HandleItems
            itemIcon="/icons/paymentmethods.png"
            itemName="Payment methods"
            onClick={() => navigate("/paymentmethods")}
          />
          <HandleItems
            itemIcon="/icons/settingicon.png"
            itemName="Setting"
            onClick={() => navigate("/setting")}
          />
          <HandleItems
            itemIcon="/icons/helpcenter.png"
            itemName="Help Center"
            onClick={() => navigate("/helpcenter")}
          />
          <HandleItems
            itemIcon="/icons/privacypolicy.png"
            itemName="Privacy policy"
            onClick={() => navigate("/privacypolicy/profile")}
          />
          <HandleItems
          
            itemIcon="/icons/logout.png"
            itemName="Log out"
            onClick={handleLogout}
          />
        </div>
      </div>
      <FooterNavigation classNameProfile="!border-blue-700" />
      <div id="logoutDiv" className="hidden"><div  className="fixed p-3 bottom-0 left-0 right-0 flex flex-col gap-2 text-center bg-white text-black rounded-t-3xl border-t border-blue-700 z-30">
<h4 className="font-medium text-lg">Logout</h4>
<span className="text-slate-500">Are you sure you want to log out?</span>
<div className="flex items-center gap-1">
  <Button onClick={handleCancelLogout} variant="outline" children="Cancel"/>
  <Button children="Yes,Logout" variant="contained"/>
</div>
      </div></div>
    </>
  );
};
export default Profile;
