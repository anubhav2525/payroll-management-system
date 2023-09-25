import React, { useEffect, useState } from 'react'
import './Addemployee.css'
import Sidebar from './Sidebar'
// import Button from './Buttons'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function Addemployee() {
  const navigate = useNavigate();
  const navigatetoshowall = () => {
    navigate("/Showalladmin");
  };

  const location = useLocation();
  const { data1 } = location.state;
  console.log(data1);
  //this block is used to fetch the user detils from database
  const [employeeId, setemployeeId] = useState('')
  const [name, setname] = useState('')
  const [fatherName, setfathername] = useState('')
  const [departmentId, setdepartmentId] = useState('')
  const [designation, setdesignation] = useState('')
  const [dob, setdob] = useState('')
  const [gender, setgender] = useState('')
  const [qualification, setqualification] = useState('')
  const [contactNo, setcontactNo] = useState('')
  const [whatsappNo, setwhatsappNo] = useState('')
  const [alternateNo, setalternateNo] = useState('')
  const [officeEmail, setofficeEmail] = useState('')
  const [personalEmail, setpersonalEmail] = useState('')
  const [maritalStatus, setmaritalStatus] = useState('')
  const [blood, setblood] = useState('')
  const [pAddress, setpAddress] = useState('')
  const [pCity, setpCity] = useState('')
  const [pState, setpState] = useState('')
  const [pPincode, setpPincode] = useState('')
  const [pCountry, setpCountry] = useState('')
  const [cAddress, setcAddress] = useState('')
  const [cCity, setcCity] = useState('')
  const [cState, setcState] = useState('')
  const [cPincode, setcPincode] = useState('')
  const [cCountry, setcCountry] = useState('')
  const [aadharNo, setaadharNo] = useState('')
  const [pancardId, setpancardId] = useState('')
  const [uanNo, setuanNo] = useState('')
  const [bankName, setbankName] = useState('')
  const [bankAccountNumber, setbankAccountNumber] = useState('')
  const [ifscCode, setifscCode] = useState('')
  const [offerDate, setofferDate] = useState('')
  const [joiningDate, setjoiningDate] = useState('')
  const [lastWorkingDate, setlastWorkingDate] = useState('')
  const [employeeSalaryId, setemployeeSalaryId] = useState('')
  const [empType, setempType] = useState('')
  const [effectiveDay, seteffectiveDay] = useState('')
  const [salary, setsalary] = useState('')
  const [basic, setbasic] = useState('')
  const [hra, sethra] = useState('')
  const [specialAllowance, setspecialAllowance] = useState('')
  const [month,setmonth]=useState('');
 
  // const [createdby, setcreatedby] = useState('')
  // const [modifiedby, setmodifiedby] = useState('')

// calculate operation
  const [percentageIncrease, setPercentageIncrease] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const handlePercentageIncreaseChange = (event) => {
    setPercentageIncrease(event.target.value);
  };
  const calculateNewSalary = (event) => {
    event.preventDefault()
    const incrementAmount = (parseFloat(salary) * parseFloat(percentageIncrease)) / 100;
    const newSalaryValue = parseFloat(salary) + incrementAmount;
    setNewSalary(newSalaryValue.toFixed(2));
  };
  

  useEffect(()=> {
   
    const sendData = async (data1) => {
      try {
        let response = await axios.post('http://localhost:8000/api/update-data-employee', {
          employeeId: data1,
        });
        setname(response.data[0].name);
        setemployeeId(response.data[0].employeeId);
        setfathername(response.data[0].fatherName);
        setdepartmentId(response.data[0].departmentId);
        setdesignation(response.data[0].designation);
        setdob(response.data[0].dob);
        setgender(response.data[0].gender);
        setqualification(response.data[0].qualification);
        setcontactNo(response.data[0].contactNo);
        setwhatsappNo(response.data[0].whatsappNo);
        setalternateNo(response.data[0].alternateNo);
        setofficeEmail(response.data[0].officeEmail);
        setpersonalEmail(response.data[0].personalEmail);
        setmaritalStatus(response.data[0].maritalStatus);
        setblood(response.data[0].blood);
        setpAddress(response.data[0].pAddress);
        setpCity(response.data[0].pCity);
        setpState(response.data[0].pState);
        setpPincode(response.data[0].pPincode);
        setpCountry(response.data[0].pCountry);
        setcAddress(response.data[0].cAddress);
        setcCity(response.data[0].cCity);
        setcState(response.data[0].cState);
        setcPincode(response.data[0].cPincode);
        setcCountry(response.data[0].cCountry);
        setaadharNo(response.data[0].aadharNo);
        setpancardId(response.data[0].pancardId);
        setuanNo(response.data[0].uanNo);
        setbankName(response.data[0].bankName);
        setbankAccountNumber(response.data[0].bankAccountNumber);
        setifscCode(response.data[0].ifscCode);
        setofferDate(response.data[0].offerDate);
        setjoiningDate(response.data[0].joiningDate);
        setlastWorkingDate(response.data[0].lastWorkingDate);
        // setcreatedby(response.data[0].createdBy);
        // setmodifiedby(response.data[0].modifiedBy);
        let response2 = await axios.post('http://localhost:8000/api/update-salary', {
          employeeId: data1,
        });
        setemployeeSalaryId(response2.data[0].employeeSalaryId);
        setempType(response2.data[0].empType);
        setbasic(response2.data[0].basic);
        setspecialAllowance(response2.data[0].specialAllowance);
        sethra(response2.data[0].hra);
        seteffectiveDay(response2.data[0].effectiveDay);
        setsalary(response2.data[0].salary);
      } catch (error) {
        console.log(error);
      }
    };
    sendData(data1);
    
  }, []);
  //  Ends here
//the code is for update 
    // api code
  const updateData = async (employeeId,name,fatherName,departmentId,designation,dob,gender,qualification,contactNo,whatsappNo,alternateNo,officeEmail,personalEmail,maritalStatus,blood,pAddress,pCity,pState,pPincode,pCountry,cAddress,cCity,cState,cPincode,cCountry,aadharNo,pancardId,uanNo,bankName,bankAccountNumber,ifscCode,offerDate,joiningDate,lastWorkingDate,employeeSalaryId,empType,effectiveDay,salary,basic,hra,specialAllowance,demp,newSalary,month,percentageIncrease) => {
    try {
      const updateResult = await axios.post('http://localhost:8000/api/update-admin-data', {
      employeeId:employeeId,  
      name: name,
      fatherName:fatherName,
      departmentId:departmentId,
      designation:designation,
      dob:dob,
      gender:gender,
      qualification:qualification,
      contactNo:contactNo,
      whatsappNo:whatsappNo,
      alternateNo:alternateNo,
      officeEmail:officeEmail,
      personalEmail:personalEmail,
      maritalStatus:maritalStatus,
      blood:blood,
      pAddress:pAddress,
      pCity:pCity,
      pState:pState,
      pPincode:pPincode,
      pCountry:pCountry,
      cAddress:cAddress,
      cCity:cCity,
      cState:cState,
      cPincode:cPincode,
      cCountry:cCountry,
      aadharNo:aadharNo,
      pancardId:pancardId,
      uanNo:uanNo,
      bankName:bankName,
      bankAccountNumber:bankAccountNumber,
      ifscCode:ifscCode,
      offerDate:offerDate,
      joiningDate:joiningDate,
      lastWorkingDate:lastWorkingDate,
      employeeSalaryId:employeeSalaryId,
      empType:empType,
      effectiveDay:effectiveDay,
      salary:salary,
      basic:basic,
      hra:hra,
      specialAllowance:specialAllowance,
      month:month,
      newSalary:newSalary,
      percentageIncrease:percentageIncrease,
      modifiedBy:demp,
      });
      if(updateResult.data.success===true){
      console.log(updateResult.data.message)
      alert(updateResult.data.message)
      navigatetoshowall();
      }
      else if(updateResult.data.success===false){
        console.log(updateResult.data.message)
        alert(updateResult.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem('employeeId'));
      const demp=localStorage.getItem('employeeId');// store the createdby id 
      console.log(demp);
    updateData(employeeId,name,fatherName,departmentId,designation,dob,gender,qualification,contactNo,whatsappNo,alternateNo,officeEmail,personalEmail,maritalStatus,blood,pAddress,pCity,pState,pPincode,pCountry,cAddress,cCity,cState,cPincode,cCountry,aadharNo,pancardId,uanNo,bankName,bankAccountNumber,ifscCode,offerDate,joiningDate,lastWorkingDate,employeeSalaryId,empType,effectiveDay,salary,basic,hra,specialAllowance,demp,newSalary,month,percentageIncrease);
  };
    



  return (
    <div id='main'>
      <Sidebar />
      <div id='employee'>
        <h4>Edit Details</h4>
        <form >
          <div className='detail'>
            <div className='detail1'>
              <div>Employee ID : </div>
              <div>Name : </div>
              <div>Father Name : </div>
              <div>Department : </div>
              <div>Designation : </div>
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
              <div>Pancard Card Number : </div>
              <div>UAN Number : </div>
              <div>Name of Bank : </div>
              <div>Bank account Number : </div>
              <div>IFSC Code : </div>
              <div>Offer Date : </div>
              <div>Joining Date : </div>
              <div>Last Working Date : </div>
              <div>Employee Salary Id : </div>
              <div>Employee Type : </div>
              <div>Effective Day : </div>
              <div>Month :</div>
              <div>Old Salary : </div>
              <div>Basic Salary : </div>
              <div>HRA Amount : </div>
              <div>Special Allowance :</div>
              <div>Salary Increment Percent :</div>
              <div>New Salary:</div>
            </div>
            <div className='detail2'>
               <input type='text' name='id' value={employeeId} disabled></input>
              <input type='text' name='name' value={name} onChange={(event) => { setname(event.target.value) }}></input>
              <input type='text' name='fathers_name' value={fatherName} onChange={(event) => { setfathername(event.target.value) }}></input>
              <select name='department' value={departmentId} onChange={(event) => { setdepartmentId(event.target.value) }}>
                <option value="">Select</option>
                <option value='01'>01 - Admin</option>
              </select>
              <select name='designation' value={designation} onChange={(event) => { setdesignation(event.target.value) }}>
                <option value="director ceo">Director / CEO</option>
                <option value="director md" selected>Director / MD</option>
                <option value="hr">HR</option>
                <option value="hr manager">HR Manager</option>
              </select>
              <input type="date" name='birth_date' value={dob} onChange={(event) => { setdob(event.target.value) }}></input>
              <select name='gender' value={gender} onChange={(event) => { setgender(event.target.value) }}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type='text' name='qualification' value={qualification} onChange={(event) => { setqualification(event.target.value) }}></input>
              <input type='number' name='c_no' value={contactNo} onChange={(event) => { setcontactNo(event.target.value) }}></input>
              <input type='number' name='w_no' value={whatsappNo} onChange={(event) => { setwhatsappNo(event.target.value) }}></input>
              <input type='number' name='a_no' value={alternateNo} onChange={(event) => { setalternateNo(event.target.value) }}></input>
              <input type='email' name='o_email' value={officeEmail} disabled ></input>
              <input type='email' name='p_email' value={personalEmail} onChange={(event) => { setpersonalEmail(event.target.value) }}></input>
              <select name='martial_status' value={maritalStatus} onChange={(event) => { setmaritalStatus(event.target.value) }}>
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
              <select name='blood_group' value={blood} onChange={(event) => { setblood(event.target.value) }}>
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
              <input type='text' name='p_address' value={pAddress} onChange={(event) => { setpAddress(event.target.value) }}></input>
              <input type='text' name='p_city' value={pCity} onChange={(event) => { setpCity(event.target.value) }}></input>
              <input type='text' name='p_state' value={pState} onChange={(event) => { setpState(event.target.value) }}></input>
              <input type='number' name='p_pincode' value={pPincode} onChange={(event) => { setpPincode(event.target.value) }}></input>
              <input type='text' name='p_country' value={pCountry} onChange={(event) => { setpCountry(event.target.value) }}></input>
              <input type='text' name='c_address' value={cAddress} onChange={(event) => { setcAddress(event.target.value) }}></input>
              <input type='text' name='c_city' value={cCity} onChange={(event) => { setcCity(event.target.value) }}></input>
              <input type='text' name='c_state' value={cState} onChange={(event) => { setcState(event.target.value) }}></input>
              <input type='number' name='c_pincode' value={cPincode} onChange={(event) => { setcPincode(event.target.value) }}></input>
              <input type='text' name='c_country' value={cCountry} onChange={(event) => { setcCountry(event.target.value) }}></input>
              <input type='number' name='aadhar_no' value={aadharNo} onChange={(event) => { setaadharNo(event.target.value) }}></input>
              <input type='text' name='pancard_no' value={pancardId} onChange={(event) => { setpancardId(event.target.value) }}></input>
              <input type='number' name='uan_no' value={uanNo} onChange={(event) => { setuanNo(event.target.value) }}></input>
              <input type='text' name='bank_name' value={bankName} onChange={(event) => { setbankName(event.target.value) }}></input>
              <input type='number' name='bank_account_no' value={bankAccountNumber} onChange={(event) => { setbankAccountNumber(event.target.value) }}></input>
              <input type='text' name='bank_ifsc_code' value={ifscCode} onChange={(event) => { setifscCode(event.target.value) }}></input>
              <input type='date' name='offer_date' value={offerDate} onChange={(event) => { setofferDate(event.target.value) }}></input>
              <input type='date' name='joining_date' value={joiningDate} onChange={(event) => { setjoiningDate(event.target.value) }}></input>
              <input type='date' name='last_working_date' value={lastWorkingDate} onChange={(event) => { setlastWorkingDate(event.target.value) }}></input>
              <input type='text' name='employeeSalaryId' value={employeeSalaryId} disabled></input>
              <select name='employeeType' value={empType} onChange={(event) => { setempType(event.target.value) }}>
                <option value=''>Select</option>
                <option value='ESI'>ESI</option>
                <option value='PF'>PF</option>
                <option value='ESI + PF'>ESI + PF</option>
                <option value='Others'>Others</option>
              </select>
              <input type='date' name='effectiveDay' value={effectiveDay} onChange={(event) => { seteffectiveDay(event.target.value) }}></input>
              <select name='month' onChange={(event) => setmonth(event.target.value)}>
                  <option value=""></option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              <input type='number' name='salary' value={salary} onChange={(event) => { setsalary(event.target.value) }} disabled></input>
              <input type='number' name='basicSalary' value={basic} onChange={(event) => { setbasic(event.target.value) }}></input>
              <input type='number' name='hraAmount' value={hra} onChange={(event) => { sethra(event.target.value) }}></input>
              <input type='number' name='specialAllowance' value={specialAllowance} onChange={(event) => { setspecialAllowance(event.target.value) }}></input>
              <span><input type='number' name='percent' onChange={handlePercentageIncreaseChange} ></input>
              <button onClick={calculateNewSalary} className='calculate-button'>Calculate</button></span>
              <input type='number' name='newsalry' value={newSalary} disabled></input>
              
            </div>
          </div>
          <div className='buttonemp'>
            <button type='reset'>Reset</button>
            <button type='submit' onClick={handleUpdate}>Submit</button>
          </div>
        </form>
      </div>
      {/* <Button/> */}
    </div>
  )
}

export default Addemployee



// const [oldSalary, setOldSalary] = useState('');
// const [percentageIncrease, setPercentageIncrease] = useState('');
// const [newSalary, setNewSalary] = useState('');

// const handleOldSalaryChange = (event) => {
//   setOldSalary(event.target.value);
// };

// const handlePercentageIncreaseChange = (event) => {
//   setPercentageIncrease(event.target.value);
// };

// const calculateNewSalary = () => {
//   const incrementAmount = (parseFloat(oldSalary) * parseFloat(percentageIncrease)) / 100;
//   const newSalaryValue = parseFloat(oldSalary) + incrementAmount;
//   setNewSalary(newSalaryValue.toFixed(2));
// };


// onChange={handleOldSalaryChange}
// onChange={handlePercentageIncreaseChange}
// onClick={calculateNewSalary}