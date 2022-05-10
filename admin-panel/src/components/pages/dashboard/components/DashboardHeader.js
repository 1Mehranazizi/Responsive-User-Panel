import React from 'react';

//Styles
import styles from "./DashboardHeader.module.css";

//Icons
import {IoReload , IoBagHandle , IoWallet} from "react-icons/io5";

const DashboardHeader = () => {
    return (
        <div className={styles.header}>
            <div className={`${styles.box} ${styles.returnOrder}`}>
                <div className={styles.icon}>
                    <IoReload />
                </div>
                <div className={styles.text}>
                    <h3>سفارش های مرجوعی</h3>
                    <h4>2</h4>
                </div>
            </div>
            <div className={`${styles.box} ${styles.orders}`}>
                <div className={styles.icon}>
                    <IoBagHandle />
                </div>
                <div className={styles.text}>
                    <h3>سفارش ها</h3>
                    <h4>12</h4>
                </div>
            </div>
            <div className={`${styles.box} ${styles.wallet}`}>
                <div className={styles.icon}>
                    <IoWallet />
                </div>
                <div className={styles.text}>
                    <h3>موجودی کیف پول</h3>
                    <h4>2,320,000 تومان</h4>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;