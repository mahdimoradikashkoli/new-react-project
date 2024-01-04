import { useEffect, useState } from "react";
import { Categories } from "../../components";
import { useNavigate } from "react-router-dom";
import { instanse } from "../../App";

interface categorieType {
  img: string;
  categorieName: string;
  _id: string;
}
const AllCategorie = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  console.log(categories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCategories = await instanse.get("/get/categorie");
        setCategories(getCategories.data.msg);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex items-center w-full fixed top-3 left-3  z-10">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="w-10 h-10 rounded-full"
              src="/icons/back.jpg"
              alt="back img"
            />
          </button>
          <h2 className="text-2xl font-medium ml-20 text-yellow-400">Category</h2>
        </div>
        <div className="grid grid-cols-3 gap-4  pt-20 pb-20  px-3">
          {categories?.length > 0 &&
            categories.map((categorie: categorieType) =>
              Categories({
                img: `http://localhost:4003${categorie.img}`,
                key: categorie._id,
                subject: categorie.categorieName,
              })
            )}
        </div>
    </>
  );
};
export default AllCategorie;
