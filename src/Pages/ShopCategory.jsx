import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom"; // Ensure this import is included

const ShopCategory = (props) => {
  // Sample static products (Replace with your actual product data)
  const staticProducts = [
    { id: 1, name: "Product 1", image: "path/to/image1.jpg", new_price: 100, old_price: 120, category: "Category 1" },
    { id: 2, name: "Product 2", image: "path/to/image2.jpg", new_price: 150, old_price: 180, category: "Category 2" },
    // Add more products as needed
  ];

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Setting static products instead of fetching
    setAllProducts(staticProducts);
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of {allProducts.length} Products</p>
        <div className="shopcategory-sort">Sort by <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
