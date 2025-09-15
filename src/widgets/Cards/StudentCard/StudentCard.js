import React from 'react';
import { Card, CardContent, Avatar, Typography, Box, Chip } from '@mui/material';
import styles from './StudentCard.module.css';

const StudentCard = ({ student }) => {
  return (
    <Card className={styles.studentCard}>
    <div className={styles.studentCardContainer}>
      <Avatar
        alt={student.name}
        src={student.image}
        className={styles.studentAvatar}
      />
      <CardContent className={styles.studentCardContent}>
        <div className={styles.studentInfo}>
        <p className={styles.studentId}>{student.id}</p>
        <p className={styles.studentName}>{student.name}</p>
        <p className={styles.studentFather}>S/o {student.fatherName}</p>
        </div>
        <figure className={styles.studentImageStyleContainer}>
          <img src={student.styleImg} className={styles.studentImageStyle} alt="Student style" />
        </figure>
        <div className={styles.studentChipContainer}>
          {/* <Chip
            label={student.currentClass}
            color="primary"
            size="small"
            className={styles.studentChip}
          /> */}
          <span className={student.currentClass === 'Inter 2'
                ? styles.studentCurrentClassBlue
                : styles.studentCurrentClassOrange}>{student.currentClass}</span>
          <span className={styles.studentCurrentLable}>Current</span>
          {/* <Chip
            label="Current"
            color="success"
            size="small"
            className={styles.studentChip}
          /> */}
        </div>
      </CardContent>
      </div>
    </Card>
  );
};

export default StudentCard;