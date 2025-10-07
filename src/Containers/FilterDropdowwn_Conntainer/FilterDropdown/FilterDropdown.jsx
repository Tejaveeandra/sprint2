import React from "react";
import styles from "./FilterDropdown.module.css";
import FilterComponent from "../../../Components/FilterComponent/FilterComponent";

const FilterDropdown = ({ isOpen, onClose, onApplyFilters }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdownOverlay} onClick={onClose}>
      <div className={styles.dropdownContent} onClick={(e) => e.stopPropagation()}>
        <FilterComponent
          isVisible={true}
          onApplyFilters={onApplyFilters}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
