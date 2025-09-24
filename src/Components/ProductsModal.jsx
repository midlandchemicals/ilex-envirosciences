import useApp from "../store";
import { categories } from "../Utils/webData";

const ProductsModal = () => {
  const setSelectedCategory = useApp((state) => state.setSelectedCategory);
  const selectedCategory = useApp((state) => state.selectedCategory);
  console.log(selectedCategory);

  return (
    <div className="border grid lg:grid-cols-4 gap-y-5 place-items-start  py-5 px-20  space-x-5">
      {categories.map((category, index) => {
        return (
          <div className="cursor-pointer  text-lg" key={index}>
            <button
              className={`cursor-pointer ${
                selectedCategory === category ? "bg-green-500" : ""
              } bg-green-200 px-2 py-1 rounded-md hover:bg-green-500`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsModal;
