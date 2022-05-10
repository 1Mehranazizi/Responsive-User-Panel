import React from 'react';

//Styles
import styles from "./Header.module.css";

//Icons
import {IoSearch , IoHeadsetOutline} from "react-icons/io5";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.searchBar}>
                <input type="text" placeholder='جستحو...' />
                <button>
                    <IoSearch />
                </button>
            </div>
            <div className={styles.link}>
                <a href="/">
                    <IoHeadsetOutline />
                    پشتیبانی
                </a>
            </div>
        </div>
    );
};

export default Header;