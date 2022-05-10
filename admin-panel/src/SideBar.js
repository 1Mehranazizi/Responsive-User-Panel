import React, { useState } from "react";

//Styles
import styles from "./SideBar.module.css";

//Imags
import UserProfile from "./assets/img/user.png";
import MenuBg from "./assets/img/arrowbottom.svg";

//Icons
import { MdKeyboardArrowRight } from "react-icons/md";

//Data
import { sideBarData } from "./data/sideBarData";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <aside className={openMenu ? styles.sidebarOpen : styles.sideBar}>
      <div className={styles.openHandler}>
        <div
          className={styles.openHandlerButton}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={MenuBg} alt="menuToggle" />
          <span className={openMenu ? styles.rightArrow : styles.leftArrow}>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className={styles.userProfile}>
        <img src={UserProfile} alt="profile" />
        <div className={styles.userName}>
          <p>مهران عزیزی</p>
          <small>09308172461</small>
        </div>
      </div>
      <ul className={styles.Navbar}>
        {sideBarData.map((item) => {
          return (
            <li
              key={item.title}
              className={
                window.location.pathname === item.path
                  ? styles.active
                  : styles.navItem
              }
            >
              <a href={item.path}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navbar;
