import { useContext, useState } from "react";
import { Button, Navigation, Textfield } from "../../../components";
import { store } from "../../../contexts";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PasswordManager = () => {
  const { showPasswordImg } = useContext(store);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCofirmPassword,setShowCofirmPassword]=useState(false)
  const handleShowPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const newPassword = document.getElementById("newPassword") as HTMLInputElement;
    if (newPassword?.type === "password") {
      newPassword!.type = "text";
      setShowNewPassword(true);
    } else {
      newPassword!.type = "password";
      setShowNewPassword(false);
    }
    
  };
  const handleShowConfirmPassword=(e: React.FormEvent)=>{
    e.preventDefault();
    const cofirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
    if (cofirmPassword?.type === "password") {
      cofirmPassword!.type = "text";
      setShowCofirmPassword(true);
    } else {
      cofirmPassword!.type = "password";
      setShowCofirmPassword(false);
    }
  }
  const changePasswordSchame=Yup.object({
    currentPassword:Yup.string().required("current password is required").min(6),
    newPassword:Yup.string().required("new Password is required"),
    confirmPassword:Yup.string().required("confirm password is required")
  })
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(changePasswordSchame)
  })
  const handleChangePassword=handleSubmit((data)=>{
    console.log(data)
  })
  return (
    <>
      <Navigation backAddress="/setting" subjectName="Password Manager" />
      <div className="px-3 pt-20">
        <form className="flex flex-col gap-3">
          <Textfield
          validation={register("currentPassword")}
          helpertext={errors?.currentPassword?.message}
            icon={showPasswordImg ? "/icons/hide.png" : "/icons/show.png"}
            label="Confirm Password"
            id="password"
            type="password"
          />
          <span className="flex justify-end text-blue-700 underline">
            Forget Password?
          </span>
          <div>
            <div className="flex flex-col">
              <label className="ps-0.5" htmlFor="newPassword">
                New Passeord
              </label>

              <div className="flex items-center w-full bg-slate-200 border-2 border-transparent focus-within:border-blue-700 rounded-lg">
                <img
                  onClick={handleShowPassword}
                  className="w-6 h-6"
                  src={showNewPassword ? "/icons/hide.png" : "/icons/show.png"}
                  alt="image"
                />
                <input
                {...register("newPassword")}
                  className="w-full outline-none border-none bg-transparent text-black text-lg py-2 px-0.5"
                  id="newPassword"
                  type="password"
                />
              </div>
              <p className="text-red-500 ps-0.5">{errors?.newPassword?.message}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="ps-0.5" htmlFor="confirmPassword">
               Cofirm Password
              </label>

              <div className="flex items-center w-full bg-slate-200 border-2 border-transparent focus-within:border-blue-700 rounded-lg">
                <img
                  onClick={handleShowConfirmPassword}
                  className="w-6 h-6"
                  src={showCofirmPassword ? "/icons/hide.png" : "/icons/show.png"}
                  alt="image"
                />
                <input
                {...register("confirmPassword")}
                  className="w-full outline-none border-none bg-transparent text-black text-lg py-2 px-0.5"
                  id="confirmPassword"
                  type="password"
                />
              </div>
              <p className="text-red-500 ps-0.5">{errors?.confirmPassword?.message}</p>
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-2 bg-white rounded-t-3xl border-t border-blue-700">
        <Button onClick={handleChangePassword} children="Change Password" variant="contained"/>
      </div>
    </>
  );
};
export default PasswordManager;
