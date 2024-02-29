import { useNavigate } from "react-router-dom"
import { Navigation } from "../../components"
import { HandleItems } from "../../microComponents"

const Setting=()=>{
    const navigate=useNavigate()
    return (
        <>
        <Navigation backAddress="/profile/user" subjectName="Setting"/>
        <div className="px-3 pt-20 flex flex-col gap-3">
            <HandleItems itemIcon="/imagehome/profile.png"
            itemName="Notification Setting"
            onClick={()=>navigate('')}/>
            <HandleItems itemIcon="/icons/passwordkey.png"
            itemName="Password Manager"
            onClick={()=>navigate('/passwordmanager')}/>
            <HandleItems itemIcon="/icons/deleteaccount.png"
            itemName="Delete Account"
            onClick={()=>navigate('')}/>
        
        </div>
        </>
    )
}
export default Setting