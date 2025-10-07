import React from "react";
import styles from "./StudentDetailsInputs.module.css";
import InputBox from "../../widgets/Inputbox/Input_box";

const StudentDetailsInputs = ({ studentDetailsFilters, onStudentDetailsChange, isClosing = false }) => {
  const inputConfigs = [
    {
      key: 'fatherName',
      placeholder: 'Enter Father Name',
      label: 'Father Name'
    },
    {
      key: 'motherName',
      placeholder: 'Enter Mother Name',
      label: 'Mother Name'
    }
  ];

  return (
    <div className={`${styles.studentDetailsInputs} ${isClosing ? styles.closing : ''}`}>
      {inputConfigs.map((config) => (
        <div key={config.key} className={styles.inputContainer}>
          <InputBox
            placeholder={config.placeholder}
            value={studentDetailsFilters[config.key]}
            onChange={(e) => onStudentDetailsChange(config.key, e.target.value)}
            label={config.label}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentDetailsInputs;
