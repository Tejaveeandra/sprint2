import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import { listData } from "./SideBarListObject";

const SideBar = () => {
  return (
    <ul className={styles.sidebar}>
      {listData.map((list, index) => (
        <li key={index} className={styles.list}>
          <NavLink
            to={list.path}
            className={({ isActive }) =>
              isActive ? `${styles.tab} ${styles.active}` : styles.tab
            }
          >
            <figure>
              <img src={list.icon} className={styles.icons} alt={list.name} />
            </figure>
            <span>{list.name}</span>
          </NavLink>
        </li>
      ))}

      <div className={styles.line}></div>
    </ul>
  );
};

export default SideBar;
