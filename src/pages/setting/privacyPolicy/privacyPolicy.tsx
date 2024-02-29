import { useParams } from "react-router-dom"
import { Navigation } from "../../../components"

const PrivacyPoliy=()=>{
    const {rout}=useParams()
    return (
        <>
        <Navigation backAddress={`${rout === "register" ? "/auth/register" : "/profile/user"}`} subjectName="Privacy Policy"/>
        <div className="px-3 py-20">
            <div className="flex flex-col gap-1 mb-4">
                <h4 className="text-lg font-medium text-blue-700">Cancelation Policy</h4>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis numquam sint deleniti, fugit voluptatibus veritatis praesentium aliquam aperiam quo. Eius omnis assumenda error eum veniam enim optio beatae architecto!</p>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-lg font-medium text-blue-700">Terma &  Condition</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia commodi repudiandae consequuntur pariatur quidem accusantium beatae, quis accusamus, perspiciatis nemo? Accusantium totam cumque error? Perspiciatis soluta ab omnis ipsam aut. Dignissimos aliquid exercitationem temporibus asperiores ipsum. In, ex expedita minima doloribus libero praesentium culpa consectetur, doloremque dolorem, ratione voluptate. Illum temporibus voluptatibus quas debitis error commodi, sit quis sunt consequuntur facere labore dicta, libero tenetur possimus enim nesciunt sequi natus accusamus asperiores, repellat ex voluptates. Commodi hic earum, facilis vero quisquam officiis sed animi accusantium id voluptatem molestias dolorum quo. Adipisci porro enim, nihil officia cum minus consectetur in!</p>
            </div>
        </div>
        </>
    )
}
export default PrivacyPoliy