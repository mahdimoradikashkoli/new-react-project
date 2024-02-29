import { useForm } from "react-hook-form";
import { Button, Navigation, Textfield } from "../../components";
// import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { instance } from "../../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const YourProfile = () => {
  // const [userImage, setUserImage] = useState<File>();
  const navigate=useNavigate()

  const updateFormSchema=Yup.object({
    name:Yup.string().required("name is required"),
    phoneNumber:Yup.string().required("phone number is required"),
    email:Yup.string().email("please inter a valid email").required("email is required"),
    dateBrithDay:Yup.string().required(),
    gender:Yup.string().required("gender is required")
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files && event.target.files[0];
    // setUserImage(image!);
    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const profileImg = document.getElementById('profileimage') as HTMLImageElement;
          profileImg.src = e.target!.result as string;
        }
        reader.readAsDataURL(image);
      }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(updateFormSchema)
  });
  const handleUpdateProfile = handleSubmit(async(data) => {
    console.log(data);
    toast.success("Updated successfully")
    navigate("/profile/user")
//     const formData=new FormData()
//     if(userImage){
//       formData.append("profileImage",userImage)
//     }
//     formData.append("name",data.name)
//     formData.append("phoneNumber",data.phoneNumber)
//     formData.append("email",data.email)
//     formData.append("dateBrithDay",data.dateBrithDay)
//     formData.append("gender",data.gender)
// const res =await instance.put("/user/update",formData) 
// console.log(res)

  });

  return (
    <>
      <Navigation backAddress="/profile/user" subjectName="Profile" />
      <div className="px-3 pt-20 pb-24">
        <div className="flex justify-center w-full">
          <div className="flex flex-col gap-2 items-center">
            <img
            id="profileimage"
              className="w-28 h-28 rounded-full object-cover"
              src="/imagehome/girl.png"
              alt="user profile"
            />
            <input
              accept="image/*"
              type="file"
              placeholder="change profile"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <form className="flex flex-col gap-2 mt-4 ">
          <Textfield
            validation={register("name")}
            label="Name"
            placeholder="Jacob jones"
            helpertext={errors?.name?.message}
          />
          <Textfield
            validation={register("phoneNumber")}
            label="Phone Number"
            placeholder="603.555.0123"
            helpertext={errors?.phoneNumber?.message}
          />
          <Textfield
            validation={register("email")}
            label="Email"
            placeholder="example@gmail.com"
            helpertext={errors?.phoneNumber?.message}
          />
          <Textfield
            validation={register("dateBrithDay")}
            label="DOB"
            placeholder="DD/MM/YY"
            helpertext={errors?.dateBrithDay?.message}
          />
          <Textfield
            validation={register("gender")}
            label="Gender"
            placeholder="mail or femail"
            helpertext={errors?.gender?.message}
          />
        </form>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-2 bg-white rounded-t-3xl border border-slate-200">
        <Button
          onClick={handleUpdateProfile}
          variant="contained"
          children="Update profile"
        />
      </div>
    </>
  );
};
export default YourProfile;
