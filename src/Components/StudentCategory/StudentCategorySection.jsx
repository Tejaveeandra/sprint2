import React from 'react';
import styles from './StudentCategorySection.module.css';

const StudentCategorySection = ({ 
  studentCategoryFilters, 
  onCategoryChange
}) => {
  const checkboxConfigs = [
    {
      key: 'currentBatch',
      label: 'Current Batch'
    },
    {
      key: 'longAbsent',
      label: 'Long Absent'
    },
    {
      key: 'dropOut',
      label: 'Drop Out'
    },
    {
      key: 'passedOut',
      label: 'Passed Out'
    },
    {
      key: 'all',
      label: 'All'
    }
  ];

  return (
    <div className={styles.studentCategorySection}>
      <div className={styles.checkboxGrid}>
        {checkboxConfigs.map((config) => (
          <label key={config.key} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={studentCategoryFilters[config.key]}
              onChange={() => onCategoryChange(config.key)}
              className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            {config.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default StudentCategorySection;
