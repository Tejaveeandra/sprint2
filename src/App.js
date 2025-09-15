import "./App.css";

import ApplicationSearchContainer from "./Containers/application-search-container/ApplicationSearchContainer";
import { Route, Routes } from "react-router-dom";
import Header from "./CommonComponents/HeaderComponents/Header";
import SideBarContainer from "./Containers/SideBar-container/SideBarContainer";
import StudentProfileContainer from "./Containers/Studentprofile/StudentProfileContainer";
import StudentTabs from "./Components/StudentNavTab/Student-nav-links-component/StudentTabs";
function App() {
  return (
    <div className="whole_container">
      <Header />

      <aside>
        <SideBarContainer />
      </aside>

      <div className="main_content">
        <Routes>
          <Route path="/" element={<ApplicationSearchContainer />} />
          <Route path="/dashboard" element={<ApplicationSearchContainer />}>
          </Route>
          <Route path="/student/*" element={<StudentProfileContainer />} >
            <Route path="studentProfile" element={<div>Student Profile Content</div>} />
            <Route path="payments" element={<div>Payments Content</div>} />
            <Route path="transport" element={<div>Transport Content</div>} />
            <Route path="academics" element={<div>Academics Content</div>} />
            <Route path="alerts" element={<div>Alerts Content</div>} />
            <Route path="history" element={<div>History Content</div>} />
            <Route path="roomAllotment" element={<div>Room Allotment Content</div>} />
            <Route path="IssueForms" element={<div>Issue Form Content</div>} />
            <Route path="certificates" element={<div>Certificates Content</div>} /></Route>
          <Route path="/application" element={<>Application</>} />
          <Route path="/employee" element={<>Employee</>} />
          <Route path="/fleet" element={<>Fleet</>} />
          <Route path="/warehouse" element={<>Warehouse</>} />
          <Route path="/sms" element={<>SMS</>} />
          <Route path="/question-bank" element={<>Question Bank</>} />
          <Route path="/assets-management" element={<>Assets Management</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
