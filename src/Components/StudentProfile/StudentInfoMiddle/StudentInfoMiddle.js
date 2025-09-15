import React from "react";
import styles from "./StudentInfoMiddle.module.css";

const StudentInfoMiddle = () => {
  const details = [
    { label: "Section", value: "Class 8" },
    { label: "Admission Type", value: "Direct Walkin" },
    { label: "Student Status", value: "Current" },
    { label: "Student Type", value: "Residential" },
    { label: "Section", value: "8A" },
    { label: "Food Type", value: "Vegetarian" },
    { label: "Religion", value: "Hindu" },
    { label: "Blood Group", value: "A+" },
  ];

  return (
    <div className={styles.container}>
      {details.map((item, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StudentInfoMiddle;
