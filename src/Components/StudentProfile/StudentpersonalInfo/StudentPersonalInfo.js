import React from "react";
import styles from "./StudentPersonalInfo.module.css";
import starIcon from "../../../assets/starWithTick.png"
import GenderIcon from "../../../assets/material-symbols_male.png";
import CallIcon from "../../../assets/Call Icon.png"
import moreInfo from "../../../assets/Frame 1171277319.png"
const StudentPersonalInfo = () => {
    return (
        <div className={styles.student_personal_info_container}>
           <div className={styles.student_personal_info_top}>
                <div className={styles.student_personal_info_top_admin}>
                    <p className={styles.student_personal_info_admHeading}>Admission No:</p>
                    <p className={styles.student_personal_info_admNo}>HYD 2534678</p>
                </div>
                <div className={styles.student_personal_info_top_name}>
                    <h2>John Doe</h2>
                    <span className={styles.studentCurrentLable}>
                        <img src={starIcon} alt="star icon"/>
                        Techno
                    </span>
                </div>
                <div className={styles.student_personal_info_top_details}>
                    <p><img src={GenderIcon} alt="genderIcon" /> Male</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                        </svg>
                        </span>
                    <p> 18 yrs</p>
                 <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    </span>
                    <p>General</p>
                </div>

           </div>
              <div className={styles.student_personal_info_bottom}>     
                <div className={styles.student_personal_info_bottom_section}>  
                     <span className={styles.studentCurrentLable}> 
                       Inter 2
                     </span>
                     <div>
                     <figure className={styles.studentImageStyleContainer}>
                       <img src={CallIcon} className={styles.studentImageStyle} alt="Student style" />
                     </figure>
                     </div>
                     <div>
                     <figure className={styles.studentImageStyleContainer}>
                          <img src={moreInfo} className={styles.studentImageStyle} alt="Student style" />
                     </figure>
                     </div>
                </div>
               
            </div>

        </div>
    )
};
export default StudentPersonalInfo;  