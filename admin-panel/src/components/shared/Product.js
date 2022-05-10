import React from "react";

//Styles
import styles from "./Product.module.css";

//Icons
import { IoCheckboxOutline, IoHeartOutline } from "react-icons/io5";

const Product = ({ img, title, price, type }) => {
  return (
    <div className={styles.product}>
      <div className={styles.right}>
        <img src={img} alt={title} />
        <div className={styles.info}>
          <p>{title}</p>
          <small>{price}</small>
        </div>
      </div>
      <span className={type ==="order" ? styles.check : styles.heart}>
        {type === "order" ? <IoCheckboxOutline /> : <IoHeartOutline />}
      </span>
    </div>
  );
};

export default Product;
