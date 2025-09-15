import React, { useState } from "react";
import styles from "../application-search-container/ApplicationSearchContainer.module.css";
import ApplicationSearchHeader from "../../Components/application-search-header-component/ApplicationSearchHeader";
import ApplicationSearchBar from "../../widgets/application-search-bar-component/ApplicationSearchBar";
import StudentCard from "../../widgets/Cards/StudentCard/StudentCard";
import StudentImage from "../../assets/profile_img.png";
import blueLine from "../../assets/Group 16.svg"


const ApplicationSearchContainer = () => {

  
  return (
    <div className={styles.application_search_main_container}>
    <div
      id="application_search_container"
      className={styles.application_search_container}
    >
      <ApplicationSearchHeader />

      <ApplicationSearchBar placeholderText="Search for Application" />
   </div>

      <div className={styles.application_search_content}>
        <div className={styles.application_search_content_header}> 
          <p className={styles.application_search_content_header_text}>
           Recent Searchs
          </p>
        </div>
        <div className={styles.application_search_content_cards}>
         <StudentCard student={{
          id: "246189267",
          name: "John Doe",
          fatherName: "Richard Roe",
          image: StudentImage,
          styleImg: blueLine,
          currentClass: "Inter 2"
        }} />
           <StudentCard student={{
          id: "246189267",
          name: "John Doe",
          fatherName: "Richard Roe",
          image: StudentImage,
          styleImg: blueLine,
          currentClass: "Inter 1"
        }} />   <StudentCard student={{
          id: "246189267",
          name: "John Doe",
          fatherName: "Richard Roe",
          image: StudentImage,
          styleImg: blueLine,
          currentClass: "Inter 2"
        }} />
      </div>
      </div>
      
   
    </div>
    
  );
};

export default ApplicationSearchContainer;
