// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import Chip from "../components/Chip";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [chosenCategory, setChosenCategory] = useState("All");




//   useEffect(() => {
//     console.log("Category Changes");
//     const url =
//       chosenCategory == "All"
//         ? "https://dummyjson.com/products"
//         : `https://dummyjson.com/products/category/${chosenCategory}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [chosenCategory]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setCategories(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   return (
//     <div className="container mx-auto">
//       {loading ? (
//         <h1 className="text-center text-3xl">Loading...</h1>
//       ) : (
//         <div>
//           <div className=" overflow-x-scroll">
//             <Chip isChosen={chosenCategory === "All"} title={"All"} />
//             {categories.map((category) => (
//               <Chip
//                 isChosen={chosenCategory === category.slug}
//                 onClick={() => setChosenCategory(category.slug)}
//                 key={category.slug}
//                 title={category.name}
//               />
//             ))}
//           </div>

//           <div className="flex flex-wrap">
//             {products.map((data) => (
//               <ProductCard info={data} key={data.id} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products;






// with sorting

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Chip from "../components/Chip";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default"); // Add state for sorting

  const sortProducts = (productsToSort, sortBy) => {
    switch (sortBy) {
      case "a-z":
        return productsToSort.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return productsToSort.sort((a, b) => b.title.localeCompare(a.title));
      case "price-low":
        return productsToSort.sort((a, b) => a.price - b.price);
      case "price-high":
        return productsToSort.sort((a, b) => b.price - a.price);
      default:
        return productsToSort;
    }
  };

  useEffect(() => {
    console.log("Category Changes");
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(sortProducts(data.products, sortBy)); // Sort on data fetch
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [chosenCategory, sortBy]); // Add sortBy to dependency array

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-3xl">Loading...</h1>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            <Chip isChosen={chosenCategory === "All"} title={"All"} />
            {categories.map((category) => (
              <Chip
                isChosen={chosenCategory === category.slug}
                onClick={() => setChosenCategory(category.slug)}
                key={category.slug}
                title={category.name}
              />
            ))}
          </div>

          {/* Sort filter below categories with border and margin */}
          <div className="text-center mt-4 mb-4">
            <select value={sortBy} onChange={handleSortChange} className="px-4 py-2 border rounded">
              <option value="default">sort</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex flex-wrap">
            {products.map((data) => (
              <ProductCard info={data} key={data.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;