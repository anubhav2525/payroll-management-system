import React, { useEffect, useState } from 'react'
import './ExperienceLetter.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from './searlogo.png'
function ExperienceLetter() {
      //date 
      const getCurrentDate = () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
      };
      const currentDate = getCurrentDate();

      // get previous page employee id
      const location = useLocation();
      const [Post, setPost] = React.useState([]);
      const [gender, setgender] = useState('');
      const [salutation1, setsalutation1] = useState('');
      const [salutation2, setsalutation2] = useState('');
      const [salutation3, setsalutation3] = useState('');
      const [salutation4, setsalutation4] = useState('');
      const [marital,setmarital]=useState('');
      const { data2 } = location.state;
      useEffect(() => {
            const sendData = async (data2) => {
                  try {
                        const response = await axios.post('http://localhost:8000/api/relievingletter', {
                              employeeId: data2,
                        });
                        // console.log(response.data);
                        console.log(data2)
                        setPost(response.data);
                        // console.log(Post)
                        setgender(response.data[0].gender);
                        setmarital(response.data[0].maritalStatus)
                        // console.log(gender);
                  } catch (error) {
                        console.error(error);
                  }
            };
            sendData(data2);
      }, [])
      // set gender salutation
      useEffect(() => {
            if (gender === 'Male') {
                  setsalutation1('him ')
                  setsalutation2('Mr ')
                  setsalutation3('His ')
                  setsalutation4('his ')
            }
            else if (gender === 'Female') {
                  if(marital==='Single'){
                        setsalutation2('Miss ')
                  }else if(marital==='Married'){
                        setsalutation2('Mrs ')
                  }
                  setsalutation1('her ')
                  setsalutation3('Her ')
                  setsalutation4('her ')
            }
      }, [gender])
      return (
            <div>
                  {
                        Post.map((Post, index) => {
                              return (
                                    <>
                                          <text>
                                                <img src={Logo} alt='error' className='sear-logo-experience' />
                                                <p className="heading-experience">Experience Letter</p>
                                                <p className="company-name-experience">SAER TECHNOLOGIES PRIVATE LIMITED</p>
                                                <p className="date-experience">
                                                      Date: {currentDate}<br />
                                                </p>
                                                <p className="salutation-experience"><bold>To whomsoever it may concern</bold></p>
                                                <p className="upper-content-experience">This is to certify that {salutation2} {Post.name} was working with SAER Technologies Private Limited.
                                                      <br />
                                                      The designation held by {salutation1} at the time of leaving
                                                      the organization was {Post.designation}.
                                                </p>
                                                <p className="lower-content-experience">{salutation3} brief experience summary
                                                      during the stay with the organization is given below:-<br />
                                                      <ul>
                                                            <li>Has experience in {Post.designation}</li>
                                                            <li>Had experience in hands on skills and teamwork</li>
                                                      </ul>
                                                </p>
                                                <p className="upper-content-experience">During the tenure we found {salutation4}
                                                      performance and conduct to be satisfactory. We
                                                      wish {salutation1}  the very best in {salutation4} future endeavors.
                                                </p>
                                                <p className="lower-salutation-experience">With Regards,<br />
                                                      Yours Sincerely,<br />

                                                </p>
                                                <p className="director-experience">Dharma Ram<br />
                                                      Director<br />
                                                      SAER Technologies Private Limited
                                                </p>
                                                <p className="last-section-experience">P.S for any further clarifications
                                                      hereafter kindly write to <a href='mailto:anbhavranjan2525@gmail.com'>hr@saertechnologies.com</a>
                                                </p>
                                                <div className="footer-experience">
                                                      <p className="footer-section-experience"><strong>Registered Office:</strong>
                                                            SAER TECHNOLOGIES PVT. LTD. 450, B2, Loknayak
                                                            Puram, New Delhi, 110041
                                                            <br /></p>
                                                      <p className="footer-section-experience"><strong>Office :</strong> SAER
                                                            TECHNOLOGIES PVT. LTD. Shop No-52, Model Town B,
                                                            Malviya Nagar, Jaipur ,302017</p>
                                                      <p className="footer-section-experience"><strong>Ph:</strong> +91 93126
                                                            00755
                                                            <strong>Email:</strong> admin@saertechnologies.com
                                                            <strong>Website:</strong> www.saertechnologies.com</p>
                                                      <p className="footer-section-experience"><strong>CIN:</strong>
                                                            U72900DL2022PTC403443</p>
                                                </div>
                                                {/* <input type="button" value="Print" onclick="window.print()"></input> */}
                                          </text>
                                    </>
                              )
                        })
                  }
            </div>
      )
}
export default ExperienceLetter