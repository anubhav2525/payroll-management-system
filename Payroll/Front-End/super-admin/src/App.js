import React from 'react';
import './App.css';
import Login from './components/Login';
import Forget from './components/Forget';
import Reset from './components/Reset';
import Right from './components/Right'
import Choose from './components/Choose'
import AddAdmin from './components/AddAdmin'
import Addemployee from './components/Addemployee'
import Searchadmin from './components/Searchadmin'
import Searchemployee from './components/Searchemployee'
import Showalladmin from './components/Showalladmin'
import Showallemployee from './components/Showallemployee'
import Project from './components/Project'
import Attendance from './components/Attendance'
import TandC from './components/TandC'
import Viewattendance from './components/Viewattendance';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Addproject from './components/Addproject';
import Addbasicdetailsadmin from './components/Addbasicdetailsadmin'
import Addbasicdetailsemployee from './components/Addbasicdetailsemployee'
import Showsalary from './components/Showsalary';
import Editdetails from './components/Editdetails'
import Salaryslip from './components/Salaryslip';
import RelievingLetter from './components/RelievingLetter';
import OfferLetter from './components/OfferLetter';
import JoiningLetter from './components/JoiningLetter';
import ExperienceLetter from './components/ExperienceLetter';
import SalaryIncrement from './components/SalaryIncrement'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login name={'Super Admin Login'}/>} />
          <Route exact path="/Forget" element={<Forget name={'Forget Password'}/>} />
          <Route exact path="/Reset" element={<Reset name={'Reset Password'}/>} />
          <Route exact path="/Dashboard" element={<Right />} />
          <Route exact path="/Employee" element={<Choose />} />
          <Route exact path="/Projects" element={<Project />} />
          <Route exact path="/Attendance" element={<Attendance />} />
          <Route exact path="/Terms and Conditions" element={<TandC />} />
          <Route exact path="Addbasicdetailsadmin" element={<Addbasicdetailsadmin/>} />
          <Route exact path="AddAdmin" element={<AddAdmin name={"Add New Admin"}/>} />
          <Route exact path="Searchadmin" element={<Searchadmin name={'Search Admin'}/>} />
          <Route exact path="Showalladmin" element={<Showalladmin name={'Show All Admins'}/>} />
          <Route exact path="Addbasicdetailsemployee" element={<Addbasicdetailsemployee/>} />
          <Route exact path="Addemployee" element={<Addemployee name={"Add New Employee"}/>} />
          <Route exact path="Searchemployee" element={<Searchemployee name={'Search Employee'}/>} />
          <Route exact path="Showallemployee" element={<Showallemployee name={'Show All Employees'}/>} />
          <Route exact path="Showsalary" element={<Showsalary/>} />
          <Route exact path="viewattendance" element={<Viewattendance/>} />
          <Route exact path="Addproject" element={<Addproject/>} />
          <Route exact path="/edit/:id" element={<Editdetails/>} />
          <Route exact path="salaryslip" element={<Salaryslip/>} />
          <Route exact path="relieving" element={<RelievingLetter/>} />
          <Route exact path="offerletter" element={<OfferLetter/>} />
          <Route exact path="experienceletter" element={<ExperienceLetter/>} />
          <Route exact path="joiningletter" element={<JoiningLetter/>} />
          <Route exact path="salaryincrement" element={<SalaryIncrement/>} />         
        </Routes>
      </Router>
    </>
  );
}

export default App;
