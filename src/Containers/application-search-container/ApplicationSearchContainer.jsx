import React, { useState } from "react";
import styles from "../application-search-container/ApplicationSearchContainer.module.css";
import ApplicationSearchHeader from "../../Components/application-search-header-component/ApplicationSearchHeader";
import ApplicationSearchBar from "../../widgets/application-search-bar-component/ApplicationSearchBar";
import FilterDropdown from "../../Containers/FilterDropdowwn_Conntainer/FilterDropdown/FilterDropdown";
import StudentCard from "../../widgets/Cards/StudentCard/StudentCard";
import StudentImage from "../../assets/profile_img.png";
import blueLine from "../../assets/Group 16.svg";

const ApplicationSearchContainer = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [appliedFilters, setAppliedFilters] = useState(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchIconClick = () => {
    setIsFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    console.log("Applied filters:", filters);
    // Here you would typically make an API call with the filters
  };

  return (
    <div className={styles.application_search_wrapper}>
      <div
        id="application_search_container"
        className={styles.application_search_container}
      >
        <ApplicationSearchHeader />
        <ApplicationSearchBar
          placeholderText="Search for Application"
          value={searchValue}
          onChange={handleSearchChange}
          onSearchIconClick={handleSearchIconClick}
          customClass={styles.search_bar_zindex} // Add custom class for z-index
        />
        <FilterDropdown
          isOpen={isFilterOpen}
          onClose={handleCloseFilter}
          onApplyFilters={handleApplyFilters}
        />
        {isFilterOpen && (
          <div
            className={styles.backdrop_overlay}
            onClick={handleCloseFilter}
          ></div>
        )}
      </div>
      <div className={styles.application_search_content}>
        <div className={styles.application_search_content_header}>
          <p className={styles.application_search_content_header_text}>
            Recent Searches
          </p>
        </div>
        <div className={styles.application_search_content_cards}>
          <StudentCard
            student={{
              id: "246189267",
              name: "John Doe",
              fatherName: "Richard Roe",
              image: StudentImage,
              styleImg: blueLine,
              currentClass: "Inter 2",
            }}
          />
          <StudentCard
            student={{
              id: "246189267",
              name: "John Doe",
              fatherName: "Richard Roe",
              image: StudentImage,
              styleImg: blueLine,
              currentClass: "Inter 1",
            }}
          />
          <StudentCard
            student={{
              id: "246189267",
              name: "John Doe",
              fatherName: "Richard Roe",
              image: StudentImage,
              styleImg: blueLine,
              currentClass: "Inter 2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationSearchContainer;