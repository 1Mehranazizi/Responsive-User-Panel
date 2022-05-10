import React from "react";

//Components
import Product from "../../../shared/Product";

//Imagse
import ProductImage from "../../../../assets/img/product.jpg";

const DashboardFavorte = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3>علاقه مندی ها</h3>
        <a href="/">مشاهده همه</a>
      </div>
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="heart"
      />
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="heart"
      />
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="heart"
      />
    </div>
  );
};

export default DashboardFavorte;
