import React from "react";

//Components
import Product from "../../../shared/Product";

//images
import ProductImage from "../../../../assets/img/product.jpg";

const DashoboardOrders = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3>سفارش ها</h3>
        <a href="/">مشاهده همه</a>
      </div>
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="order"
      />
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="order"
      />
      <Product
        img={ProductImage}
        title="تی شرت سیدونا مدل 036MSI"
        price="149,000 تومان"
        type="order"
      />
    </div>
  );
};

export default DashoboardOrders;
