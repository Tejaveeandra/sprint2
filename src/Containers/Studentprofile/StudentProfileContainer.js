import React from "react";
import styles from "./StudentProfileContainer.module.css";
import StudentProfileImage from "../../Components/StudentProfile/StudentProfileImage/StudentProfileImg";
import StudentPersonalInfo from "../../Components/StudentProfile/StudentpersonalInfo/StudentPersonalInfo";
import StudentInfoMiddle from "../../Components/StudentProfile/StudentInfoMiddle/StudentInfoMiddle";
import StudentInfoButtons from "../../Components/StudentProfile/StudentInfoRightButtons/StudentInfoButtons";
import StudentTabs from "../../Components/StudentNavTab/Student-nav-links-component/StudentTabs";
import { Outlet } from "react-router-dom";
const StudentProfileContainer = () => {
    return (
        <div className={styles.student_main}>
            <div className={styles.student_profile_container}>
                <div className={styles.student_profile_image_section}>
                    <StudentProfileImage/>
                    <StudentPersonalInfo/>
                </div>
                <div className={styles.student_profile_info_middle_section}>
                    <StudentInfoMiddle/>
                </div>
                <div className={styles.student_profile_info_right_section}>
                <StudentInfoButtons/>
                </div>
            </div>
            <div className={styles.student_tabs_section}>
                <StudentTabs/>
            </div>
            <div className={styles.student_tab_content}>
                <Outlet />
            </div>
       </div>
    )
}
export default StudentProfileContainer;