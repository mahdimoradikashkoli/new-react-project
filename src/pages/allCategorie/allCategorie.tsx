import { useEffect, useState } from "react";
import { Categories, Navigation } from "../../components";
import { instanse } from "../../App";

interface categorieType {
  img: string;
  categorieName: string;
  _id: string;
}
const AllCategorie = () => {
  const [categories, setCategories] = useState([]);
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
      <Navigation backAddress="/" subjectName="category"/>
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
