import React from "react";
import styles from "./LocationDropdowns.module.css";
import Dropdown from "../../widgets/Dropdown/Dropdown";

const LocationDropdowns = ({ locationFilters, onLocationChange, isClosing = false }) => {
  const dropdownConfigs = [
    {
      key: 'state',
      name: 'Select State',
      options: [
        { value: '', label: 'Select State' },
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'tamilnadu', label: 'Tamil Nadu' },
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'rajasthan', label: 'Rajasthan' },
        { value: 'punjab', label: 'Punjab' }
      ]
    },
    {
      key: 'city',
      name: 'Select City',
      options: [
        { value: '', label: 'Select City' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'pune', label: 'Pune' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'jaipur', label: 'Jaipur' },
        { value: 'chandigarh', label: 'Chandigarh' }
      ]
    },
    {
      key: 'campus',
      name: 'Select Campus',
      options: [
        { value: '', label: 'Select Campus' },
        { value: 'main', label: 'Main Campus' },
        { value: 'north', label: 'North Campus' },
        { value: 'south', label: 'South Campus' },
        { value: 'east', label: 'East Campus' },
        { value: 'west', label: 'West Campus' }
      ]
    }
  ];

  return (
    <div className={`${styles.locationDropdowns} ${isClosing ? styles.closing : ''}`}>
      {dropdownConfigs.map((config) => (
        <div key={config.key} className={styles.dropdownContainer}>
          <Dropdown
            dropdownname={config.name}
            results={config.options.map(option => option.label)}
            value={config.options.find(option => option.value === locationFilters[config.key])?.label || ''}
            onChange={(e) => {
              const selectedLabel = e.target.value;
              const selectedOption = config.options.find(option => option.label === selectedLabel);
              onLocationChange(config.key, selectedOption ? selectedOption.value : '');
            }}
            dropdownsearch={true}
          />
        </div>
      ))}
    </div>
  );
};

export default LocationDropdowns;
