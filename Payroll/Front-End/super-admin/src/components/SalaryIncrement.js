import React, { useEffect, useState } from 'react'
import './salaryincrement.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from './searlogo.png'
function SalaryIncrement() {
      //date 
      const getCurrentDate = () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
      };
      const currentDate = getCurrentDate();
      const location = useLocation();
      const { data2 } = location.state;
      const [salutation2, setsalutation2] = useState('');
      const [marital, setmarital] = useState('');
      const [gender, setgender] = useState('');
      const [salary, setsalary] = useState([]);
      const [joiningDate,setjoiningDate]=useState('')
      const [designation,setdesignation]=useState('')
      const [name,setname]=useState('')
      const [pAddress, setpAddress] = useState('')
      const [pCity, setpCity] = useState('')
      const [pState, setpState] = useState('')
      const [percentageIncrease, setPercentageIncrease] = useState('');
      const [newSalary, setNewSalary] = useState('');
      const [effectiveDay, seteffectiveDay] = useState('')
      const [month, setmonth] = useState('')

      useEffect(() => {
            const sendData = async (data2) => {
                  try {
                        const response = await axios.post('http://localhost:8000/api/relievingletter', {
                              employeeId: data2,
                        });
                        const salarydata = await axios.post('http://localhost:8000/api/show-salary', {
                              employeeId: data2,
                        });
                        setjoiningDate(response.data[0].joiningDate);
                        setname(response.data[0].name);
                        setdesignation(response.data[0].designation);
                        setpAddress(response.data[0].pAddress);
                        setpCity(response.data[0].pCity);
                        setpState(response.data[0].pState);
                        setgender(response.data[0].gender);
                        setmarital(response.data[0].maritalStatus);
                        setNewSalary(salarydata.data[0].salary)
                        setsalary(salarydata.data[0].oldsalary)
                        setPercentageIncrease(salarydata.data[0].percent)
                        setmonth(salarydata.data[0].month)
                        seteffectiveDay(salarydata.data[0].effectiveDay)

                  } catch (error) {
                        console.error(error);
                  }
            };
            sendData(data2);
      }, [])
      useEffect(() => {
            if (gender === 'Male') {
                  setsalutation2('Mr')
            }
            else if (gender === 'Female') {
                  if (marital === 'Single') {
                        setsalutation2('Miss ')
                  } else if (marital === 'Married') {
                        setsalutation2('Mrs ')
                  }
                  setsalutation2('Mrs')
            }
      }, [gender])

      return (
            
            <text>
                  <img src={Logo} alt='error' className='sear-logo-increment' />
                  <h3 className="heading-increment">SALARY INCREMENT LETTER</h3>
                  <p className="company-name-increment">SAER TECHNOLOGIES PRIVATE LIMITED</p>

                        <p className="letter-title-increment">
                              Date: {currentDate}<br />
                              {salutation2} &nbsp;{name}<br />
                              {pAddress}<br />
                              {pCity}<br />
                              {pState}<br />
                        </p>
                        <p className="salutation-increment">Dear {name},</p>

                  <p className="upper-content-increment">We are pleased to inform you that
                        based on your performance and dedication towards the
                        work, the management has decided to increase your
                        salary. According to our records, you have
                        been associated with SAER TECHNOLOGIES PRIVATE LIMITED
                        since {joiningDate} holding the
                        position of {designation} with Rs&nbsp;
                         {salary}/- per month. The
                        management now has decided to
                        increase your salary by {percentageIncrease}% from {month}. This appraisal
                        increases your salary from Rs {salary}/- to
                        Rs {newSalary}/- effective from {effectiveDay}.
                  </p>
                  <p className="lower-content-increment">You have been playing an integral
                        role in the company's success, and this is the least we
                        can do
                        to acknowledge your dedication, hard work, and
                        commitment.
                  </p>
                  <p className="lower-content-increment">We hope you will keep up the good
                        work and give your complete support to the company.<br />
                        Thanks for being part of our corporate family.</p>
                  <p className="lower-salutation-increment">With Regards,<br />
                        Yours Sincerely,<br />
                        Name
                  </p>
                  <p className="director-increment">Dharma Ram<br />
                        Director<br />
                        SAER Technologies Private Limited
                  </p>
                  <p className="last-section-increment">P.S for any further clarifications
                        here after kindly write to hr@saertechnologies.com
                  </p>
                  <div className="footer-increment">
                        <p className="footer-section-increment"><strong>Registered Office:</strong>
                              SAER TECHNOLOGIES PVT. LTD. 450, B2, Loknayak
                              Puram, New Delhi, 110041
                              <br /></p>
                        <p className="footer-section-increment"><strong>Office :</strong>
                              SAER
                              TECHNOLOGIES PVT. LTD. Shop No-52, Model Town B,
                              Malviya Nagar, Jaipur ,302017</p>
                        <p className="footer-section-increment"><strong>Ph:</strong> +91
                              93126
                              00755
                              <strong>Email:</strong> admin@saertechnologies.com
                              <strong>Website:</strong> www.saertechnologies.com</p>
                        <p className="footer-section-increment"><strong>CIN:</strong>
                              U72900DL2022PTC403443</p>
                  </div>
            </text>
      )

}

export default SalaryIncrement