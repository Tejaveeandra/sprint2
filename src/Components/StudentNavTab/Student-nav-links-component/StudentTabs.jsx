import { useLocation, useNavigate } from "react-router-dom";
import styles from "./StudentTabs.module.css";
import { tabs } from "./links";

const StudentTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle tab click and navigation
  const handleTabClick = (path) => {
    navigate(path); // Navigate to the corresponding path
  };

  return (
    <ul className={styles.all_nav_tabs}>
      {tabs.map((tab) => {
        const isActive = location.pathname.includes(tab.path); // Check if the tab is active
        return (
          <li
            key={tab.label}
            className={`${styles.nav_tabs} ${isActive ? styles.active_tab : ""}`}
            onClick={() => handleTabClick(tab.path)} 
          >
            <a
              // className={`${styles.tab} ${isActive ? styles.activeTabText : ""}`}
            >
              {tab.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default StudentTabs;
