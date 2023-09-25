import Login from './components/Login';
import Forget from './components/Forget';
import Reset from './components/Reset';
import Right from './components/Right'
import Project from './components/Project'
import TandC from './components/TandC'
import Viewattendance from './components/Viewattendance';
import Edit from './components/Edit';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Salaryslip from './components/Salaryslip'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login name={'Employee Login'}/>} />
          <Route exact path="/Forget" element={<Forget name={'Forget Password'}/>} />
          <Route exact path="/Reset" element={<Reset name={'Reset Password'}/>} />
          <Route exact path="/Dashboard" element={<Right />} />
          <Route exact path="/Projects" element={<Project />} />
          <Route exact path="/Terms and Conditions" element={<TandC />} />
          <Route exact path="viewattendance" element={<Viewattendance/>} />
          <Route exact path="Edit" element={<Edit/>} />
          <Route exact path="salaryslip" element={<Salaryslip/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
