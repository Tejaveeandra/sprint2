import React from "react";
// import maleImg from "../../../assets/StudentProfileimages/male.jpg";
// import femaleImg from "../../../assets/StudentProfileimages/female.jpg";
import defaultImg from "../../../assets/profile_img.png"

const StudentProfileImage = ({ gender }) => {
  // const img =
  //   gender === "Male"
  //     ? maleImg
  //     : gender === "Female"
  //     ? femaleImg
  //     : defaultImg;
const img = defaultImg;
  return (
    <img
      src={img}
      alt="Student"
      style={{
        width: "134px",
        height: "134px",
        objectFit: "cover",
        borderRadius: "180px",
        border: "6px solid #FFF",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
        background: `lightgray center / cover no-repeat`
      }}
    />
  );
};

export default StudentProfileImage;
