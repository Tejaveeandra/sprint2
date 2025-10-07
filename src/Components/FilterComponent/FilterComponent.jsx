import React, { useState } from "react";
import styles from "./FilterComponent.module.css";
import Button from "../../widgets/Button/Button";
import DesignDiagram from "../../assets/Filter/DesignDiagram.svg";
import PlusIcon from "../../assets/Filter/PlusIcon.svg";
import LocationDropdowns from "../Location/LocationDropdowns";
import StudentDetailsInputs from "../StudentDetails/StudentDetailsInputs";
import StudentCategorySection from "../StudentCategory/StudentCategorySection";

const FilterComponent = ({ 
  isVisible = true, 
  onApplyFilters, 
  onClose,
  initialFilters = null 
}) => {
  const [filters, setFilters] = useState(initialFilters || {
    otherBranch: false,
    studentCategory: {
      currentBatch: true,
      longAbsent: false,
      dropOut: false,
      passedOut: false,
      all: false
    }
  });

  const [sections, setSections] = useState({
    location: { expanded: false, closing: false },
    studentDetails: { expanded: false, closing: false }
  });

  const [locationFilters, setLocationFilters] = useState({
    state: '',
    city: '',
    campus: ''
  });

  const [studentDetailsFilters, setStudentDetailsFilters] = useState({
    fatherName: '',
    motherName: ''
  });

  const [studentCategoryFilters, setStudentCategoryFilters] = useState({
    currentBatch: false,
    longAbsent: false,
    dropOut: false,
    passedOut: false,
    all: false
  });

  // Generic function to close a section with animation
  const closeSection = (sectionName) => {
    setSections(prev => ({
      ...prev,
      [sectionName]: { ...prev[sectionName], closing: true }
    }));
    setTimeout(() => {
      setSections(prev => ({
        ...prev,
        [sectionName]: { expanded: false, closing: false }
      }));
    }, 300);
  };

  // Generic function to toggle a section
  const toggleSection = (sectionName) => {
    if (!filters.otherBranch) return;

    const isExpanded = sections[sectionName].expanded;
    
    if (isExpanded) {
      closeSection(sectionName);
    } else {
      // Close other sections first
      Object.keys(sections).forEach(key => {
        if (key !== sectionName && sections[key].expanded) {
          closeSection(key);
        }
      });
      // Open current section
      setSections(prev => ({
        ...prev,
        [sectionName]: { expanded: true, closing: false }
      }));
    }
  };

  const handleOtherBranchChange = (e) => {
    const isChecked = e.target.checked;
    setFilters(prev => ({ ...prev, otherBranch: isChecked }));

    // Close all sections if Other Branch is unchecked
    if (!isChecked) {
      Object.keys(sections).forEach(sectionName => {
        if (sections[sectionName].expanded) {
          closeSection(sectionName);
        }
      });
    }
  };

  const handleLocationChange = (field, value) => {
    setLocationFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleStudentDetailsChange = (field, value) => {
    setStudentDetailsFilters(prev => ({ ...prev, [field]: value }));
  };


  const handleStudentCategoryChange = (field) => {
    if (field === 'all') {
      // If "All" is selected, uncheck all others
      setStudentCategoryFilters(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(key => {
          if (key !== 'all') {
            newData[key] = false;
          }
        });
        newData.all = !newData.all;
        return newData;
      });
    } else {
      // If any specific category is selected, uncheck "All"
      setStudentCategoryFilters(prev => ({
        ...prev,
        [field]: !prev[field],
        all: false
      }));
    }
  };


  const handleApplyFilters = () => {
    const allFilters = {
      ...filters,
      location: locationFilters,
      studentDetails: studentDetailsFilters,
      studentCategory: studentCategoryFilters
    };
    onApplyFilters?.(allFilters);
    onClose?.();
  };

  // Reusable section component
  const SectionHeader = ({ title, isExpandable = false, sectionName, customClassName = "" }) => (
    <div 
      className={`${styles.sectionHeader} ${isExpandable ? styles.clickableHeader : ''} ${!filters.otherBranch && isExpandable ? styles.disabled : ''} ${customClassName}`}
      onClick={isExpandable ? () => toggleSection(sectionName) : undefined}
    >
      <h4 className={`${styles.sectionTitle} ${customClassName}`}>{title}</h4>
      {isExpandable && (
        <div className={`${styles.expandButton} ${sections[sectionName]?.expanded ? styles.rotated : ''}`}>
          <img src={PlusIcon} alt="Plus Icon" className={styles.plusIcon} />
        </div>
      )}
    </div>
  );

  // Section configurations
  const sectionConfigs = [
    {
      name: 'location',
      title: 'Location',
      isExpandable: true,
      component: LocationDropdowns,
      props: {
        locationFilters,
        onLocationChange: handleLocationChange,
        isClosing: sections.location.closing
      }
    },
    {
      name: 'studentDetails',
      title: 'Student Details',
      isExpandable: true,
      component: StudentDetailsInputs,
      props: {
        studentDetailsFilters,
        onStudentDetailsChange: handleStudentDetailsChange,
        isClosing: sections.studentDetails.closing
      }
    },
    {
      name: 'studentCategory',
      title: 'Student Category',
      isExpandable: false,
      component: StudentCategorySection,
      props: {
        studentCategoryFilters,
        onCategoryChange: handleStudentCategoryChange
      },
      customClassName: styles.studentCategoryTitle
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={styles.filterContainer}>
      <figure className={styles.filterImageContainer}>
        <img src={DesignDiagram} alt="Filter Design Diagram" className={styles.filterImage} />
      </figure>
      
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Filter</h3>
      </div>

      <div className={styles.filterBody}>
        {/* Other Branch Checkbox */}
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={filters.otherBranch}
              onChange={handleOtherBranchChange}
              className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            Other Branch
          </label>
        </div>

        {/* Dynamic Sections */}
        {sectionConfigs.map(({ name, title, isExpandable, component: Component, props, customClassName }) => (
          <div key={name} className={styles.section}>
            <SectionHeader 
              title={title} 
              isExpandable={isExpandable} 
              sectionName={name}
              customClassName={customClassName}
            />
            {name !== 'studentCategory' && <div className={styles.sectionDivider}></div>}
            
            {(isExpandable ? sections[name]?.expanded : true) && (
              <Component {...props} />
            )}
          </div>
        ))}
      </div>

      <div className={styles.filterFooter}>
        <Button
          buttonname="Search"
          onClick={handleApplyFilters}
          variant="primary"
          width="100%"
        />
      </div>
    </div>
  );
};

export default FilterComponent;
