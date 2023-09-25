import React, { useEffect, useState } from 'react'
import './Addemployee.css'
import Sidebar from './Sidebar'
// import Buttons from './Buttons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function Addemployee() {
  const navigate = useNavigate();
  const navigatetobasicdetail = () => {
    navigate("/Addbasicdetailsemployee");
  };
  const location = useLocation();
  const { data1, data2 } = location.state;
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    department: '',
    designation: '',
    profilePicture: null,
    dob: '',
    gender: '',
    qualification: '',
    contactNumber: '',
    whatsappNumber: '',
    alternateNumber: '',
    officeEmail: '',
    personalEmail: '',
    marital: '',
    blood: '',
    pAddress: '',
    pCity: '',
    pState: '',
    pPincode: '',
    pCountry: '',
    cAddress: '',
    cCity: '',
    cState: '',
    cPincode: '',
    cCountry: '',
    aadharNumber: '',
    aadharFile: null,
    pancardId: '',
    pancardFile: null,
    uanNumber: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    offerDate: '',
    joiningDate: '',
    lastWorking: '',
    employeeType: '',
    effectiveDay: '',
    salary: '',
    basicSalary: '',
    hraAmount: '',
    specialAllowance: '',
    createdBy: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const set = () => {
      setFormData({ ...formData, name: data1, officeEmail: data2 });
      // the created by code add here from local storage
    };
    set();
  }, []);
  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const demp = localStorage.getItem('employeeId');// store the createdby id 
    console.log(demp);

    const apiEndpoint = 'http://localhost:8000/api/store-employee';
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('fatherName', formData.fatherName);
    payload.append('department', formData.department);
    payload.append('designation', formData.designation);
    payload.append('profilePicture', formData.profilePicture);
    payload.append('dob', formData.dob);
    payload.append('gender', formData.gender);
    payload.append('qualification', formData.qualification);
    payload.append('contactNumber', formData.contactNumber);
    payload.append('whatsappNumber', formData.whatsappNumber);
    payload.append('alternateNumber', formData.alternateNumber);
    payload.append('officeEmail', formData.officeEmail);
    payload.append('personalEmail', formData.personalEmail);
    payload.append('marital', formData.marital);
    payload.append('blood', formData.blood);
    payload.append('pAddress', formData.pAddress);
    payload.append('pCity', formData.pCity);
    payload.append('pState', formData.pState);
    payload.append('pPincode', formData.pPincode);
    payload.append('pCountry', formData.pCountry);
    payload.append('cAddress', formData.cAddress);
    payload.append('cCity', formData.cCity);
    payload.append('cState', formData.cState);
    payload.append('cPincode', formData.cPincode);
    payload.append('cCountry', formData.cCountry);
    payload.append('aadharNumber', formData.aadharNumber);
    payload.append('aadharFile', formData.aadharFile);
    payload.append('pancardId', formData.pancardId);
    payload.append('pancardFile', formData.pancardFile);
    payload.append('uanNumber', formData.uanNumber);
    payload.append('bankName', formData.bankName);
    payload.append('accountNumber', formData.accountNumber);
    payload.append('ifscCode', formData.ifscCode);
    payload.append('offerDate', formData.offerDate);
    payload.append('joiningDate', formData.joiningDate);
    payload.append('lastWorking', formData.lastWorking);
    payload.append('employeeType', formData.employeeType);
    payload.append('effectiveDay', formData.effectiveDay);
    payload.append('salary', formData.salary);
    payload.append('basicSalary', formData.basicSalary);
    payload.append('hraAmount', formData.hraAmount);
    payload.append('specialAllowance', formData.specialAllowance);
    payload.append('createdBy', demp);
    try {
      console.log(payload);
      const response = await axios.post(apiEndpoint, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.message); // Do something with the response
      console.log(response.data.error); // Do something with the response
      // alert(response.data.error);
      alert(response.data.message);
      // Reset the form after successful submission
      setFormData({
        name: '',
        fatherName: '',
        department: '',
        designation: '',
        profilePicture: null,
        dob: '',
        gender: '',
        qualification: '',
        contactNumber: '',
        whatsappNumber: '',
        alternateNumber: '',
        officeEmail: '',
        personalEmail: '',
        marital: '',
        blood: '',
        pAddress: '',
        pCity: '',
        pState: '',
        pPincode: '',
        pCountry: '',
        cAddress: '',
        cCity: '',
        cState: '',
        cPincode: '',
        cCountry: '',
        aadharNumber: '',
        aadharFile: null,
        pancardId: '',
        pancardFile: null,
        uanNumber: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        offerDate: '',
        joiningDate: '',
        lastWorking: '',
        employeeType: '',
        effectiveDay: '',
        salary: '',
        basicSalary: '',
        hraAmount: '',
        specialAllowance: '',
        createdBy: ''
      });
      navigatetobasicdetail();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id='main'>
      <Sidebar />
      <div id='employee'>
        <h4>Add new Employee</h4>
        <form onSubmit={handleSubmit} >
          <div className='detail'>
            <div className='detail1'>
              <div>Name : </div>
              <div>Father Name : </div>
              <div>Department : </div>
              <div>Designation : </div>
              <div>Profile Picture : </div>
              <div>Date of Birth : </div>
              <div>Gender : </div>
              <div>Qualification : </div>
              <div>Contact Number : </div>
              <div>Whatsapp Number : </div>
              <div>Alternate Number : </div>
              <div>Office Email : </div>
              <div>Personal Email : </div>
              <div>Marital Status : </div>
              <div>Blood group : </div>
              <div>Permanent Address : </div>
              <div>City : </div>
              <div>State : </div>
              <div>Pincode: </div>
              <div>Country : </div>
              <div>Current Address : </div>
              <div>Current City : </div>
              <div>Current State : </div>
              <div>Current Pincode: </div>
              <div>Current Country : </div>
              <div>Aadhar Card Number : </div>
              <div>Aadhar Card file : </div>
              <div>Pancard Card Number : </div>
              <div>Pancard Card file : </div>
              <div>UAN Number : </div>
              <div>Name of Bank : </div>
              <div>Bank account Number : </div>
              <div>IFSC Code : </div>
              <div>Offer Date : </div>
              <div>Joining Date : </div>
              <div>Last Working Date : </div>
              <div>Employee Type : </div>
              <div>Effective Day : </div>
              <div>Salary : </div>
              <div>Basic Salary : </div>
              <div>HRA Amount : </div>
              <div>Special Allowance</div>

            </div>
            <div className='detail2'>
              <input type='text' name='name' value={data1} ></input>
              <input type='text' name='fatherName' value={formData.fatherName} onChange={handleChange}></input>
              <select name='department' value={formData.department} onChange={handleChange} >
                <option value="">Select</option>
                <option value='02'>02 - Content Department</option>
                <option value='03'>03 - Customer Support Department</option>
                <option value='04'>04 - Designer Department</option>
                <option value='05'>05 - SEO Department</option>
                <option value='06'>06 - Social Media Department</option>
                <option value='07'>07 - Software Development Department</option>
              </select>
              <select name='designation' value={formData.designation} onChange={handleChange}>
                <option value="">Select</option>
                <option value="CTO">CTO</option>
                <option value="Technical Lead">Technical Lead</option>
                <option value="Content Writer">Content Writer</option>
                <option value="Designer">Designer</option>
                <option value="Sr Designer">Sr Designer</option>
                <option value="SEO Executive">SEO Executive</option>
                <option value="Sr SEO Executive">Sr SEO Executive</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Developer">Developer</option>
                <option value="Customer Care Executive">Customer Care Executive</option>
                <option value="Sr Customer Care Executive">Sr Customer Care Executive</option>
              </select>
              <input type="file" name='profilePicture' accept='image/png, image/jpeg' onChange={handleImageChange}></input>
              <input type="date" name='dob' value={formData.dob} onChange={handleChange} ></input>
              <select name='gender' value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type='text' name='qualification' value={formData.qualification} onChange={handleChange}></input>
              <input type='number' value={formData.contactNumber} onChange={handleChange} name='contactNumber' ></input>
              <input type='number' name='whatsappNumber' value={formData.whatsappNumber} onChange={handleChange}></input>
              <input type='number' name='alternateNumber' value={formData.alternateNumber} onChange={handleChange}></input>
              <input type='email' name='officeEmail' value={data2} ></input>
              <input type='email' name='personalEmail' value={formData.personalEmail} onChange={handleChange}></input>
              <select name='marital' value={formData.marital} onChange={handleChange} >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
              <select name='blood' value={formData.blood} onChange={handleChange} >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <input type='text' name='pAddress' value={formData.pAddress} onChange={handleChange} ></input>
              <input type='text' name='pCity' value={formData.pCity} onChange={handleChange} ></input>
              <input type='text' name='pState' value={formData.pState} onChange={handleChange}></input>
              <input type='number' name='pPincode' value={formData.pPincode} onChange={handleChange}></input>
              <input type='text' name='pCountry' value={formData.pCountry} onChange={handleChange}></input>
              <input type='text' name='cAddress' value={formData.cAddress} onChange={handleChange}></input>
              <input type='text' name='cCity' value={formData.cCity} onChange={handleChange}></input>
              <input type='text' name='cState' value={formData.cState} onChange={handleChange}></input>
              <input type='number' name='cPincode' value={formData.cPincode} onChange={handleChange}></input>
              <input type='text' name='cCountry' value={formData.cCountry} onChange={handleChange}></input>
              <input type='number' name='aadharNumber' value={formData.aadharNumber} onChange={handleChange}></input>
              <input type="file" name='aadharFile' accept='image/png, image/jpeg' onChange={handleImageChange} ></input>
              <input type='text' name='pancardId' value={formData.pancardId} onChange={handleChange}></input>
              <input type="file" name='pancardFile' accept="image/png, image/jpeg" onChange={handleImageChange}></input>
              <input type='number' name='uanNumber' value={formData.uanNumber} onChange={handleChange} ></input>
              <input type='text' name='bankName' value={formData.bankName} onChange={handleChange}></input>
              <input type='number' name='accountNumber' value={formData.accountNumber} onChange={handleChange}></input>
              <input type='text' name='ifscCode' value={formData.ifscCode} onChange={handleChange} ></input>
              <input type='date' name='offerDate' value={formData.offerDate} onChange={handleChange}></input>
              <input type='date' name='joiningDate' value={formData.joiningDate} onChange={handleChange}></input>
              <input type='date' name='lastWorking' value={formData.lastWorking} onChange={handleChange}></input>
              <select name='employeeType' value={formData.employeeType} onChange={handleChange} >
                <option value=''>Select</option>
                <option value='ESI'>ESI</option>
                <option value='PF'>PF</option>
                <option value='ESI + PF'>ESI + PF</option>
                <option value='Others'>Others</option>
              </select>
              <input type='date' name='effectiveDay' value={formData.effectiveDay} onChange={handleChange} ></input>
              <input type='number' name='salary' value={formData.salary} onChange={handleChange}></input>
              <input type='number' name='basicSalary' value={formData.basicSalary} onChange={handleChange}></input>
              <input type='number' name='hraAmount' value={formData.hraAmount} onChange={handleChange}></input>
              <input type='number' name='specialAllowance' value={formData.specialAllowance} onChange={handleChange} ></input>
            </div>
          </div>
          <div className='buttonemp'>
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
          </div>
        </form>
      </div>
      {/* <Buttons /> */}
    </div>
  )
}

export default Addemployee