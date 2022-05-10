import React from "react";

//Styles
import styles from "./DashboardBank.module.css";

const DashboardBank = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3>کارت بانکی</h3>
      </div>
      <div className={styles.card}>
          <h4 className={styles.bankName}>بانک ملت</h4>
          <h4 className={styles.bankNum}>
              6037 1234 5678 9012
          </h4>
          <div className={styles.footer}>
              <p>04/03</p>
              <p>123</p>
          </div>
      </div>
    </div>
  );
};

export default DashboardBank;
