import React from "react";

//Styles
import styles from "./DashboardAddress.module.css";

const DashboardAddress = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3>آدرس ها</h3>
        <a href="/">مشاهده همه</a>
      </div>
      <div className={styles.myAddress}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2329.651084028343!2d47.07580519566396!3d34.33458976076545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1652195672694!5m2!1sfa!2s"
          width="300"
          height="200"
          loading="lazy"
        ></iframe>
        <p>کرمانشاه بلوار ارشاد خیابان توحید</p>
      </div>
    </div>
  );
};

export default DashboardAddress;
