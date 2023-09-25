import React, { useEffect, useState } from 'react'
import './offerletter.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from './searlogo.png'
function OfferLetter() {
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
      const [salary,setsalary] = useState('');
      

      const [marital,setmarital]=useState('');
      const { data2 } = location.state;
      useEffect(() => {
            const sendData = async (data2) => {
                  try {
                        const response = await axios.post('http://localhost:8000/api/relievingletter', {
                              employeeId: data2,
                        });
                        const salary = await axios.post('http://localhost:8000/api/salary-find',{
                              employeeId: data2,
                        });
                        console.log(salary.data)
                        setsalary(salary.data)
                        // console.log(salary.data)                        
                        setgender(response.data[0].gender);
                        setmarital(response.data[0].maritalStatus)
                        setPost(response.data);
                  } catch (error) {
                        console.error(error);
                  }
            };
            sendData(data2);
      }, [])
      // set gender salutation
      useEffect(() => {
            if (gender === 'Male') {
                  setsalutation2('Mr ')                 
            }
            else if (gender === 'Female') {
                  if(marital==='Single'){
                        setsalutation2('Miss ')
                  }else if(marital==='Married'){
                        setsalutation2('Mrs ')
                  }
             
            }
      }, [gender])
      return (
            <div>
                   <div>
                   {
                        Post.map((Post, index) => {
                              return (
                                    <>
                        <text>
                              <img src={Logo} alt='error' className='sear-logo-offer' />
                              <h3 className="heading-offer">Offer Letter</h3>
                              <p className="company-name-offer">SAER TECHNOLOGIES PRIVATE LIMITED</p>
                              <p className="letter-title-offer">
                                    Date: {currentDate}<br />
                                   {salutation2}&nbsp;{Post.name}<br />
                                   {Post.pAddress}<br />
                                                {Post.pCity}<br />
                                                {Post.pState}<br />
                              </p>
                              <p className="salutation-offer">Dear {Post.name},</p>
                              <p className="salutation-offer">Greetings of the day!
                              </p>

                              <p className="upper-content-offer">Thank you for exploring career
                                    opportunities with SAER Technologies Private Limited.<br />
                                    We are pleased to make you an offer of employment.

                              </p>
                              <p className="lower-content-offer">This offer is based on your profile
                                    and performance in the selection process. You have
                                    been selected for the position of {Post.designation}. Your
                                    gross salary including all benefits will
                                    be {salary}/- p.a,<br />
                                    As per the terms and conditions set out herein.
                              </p>
                              <p className="lower-content-offer">Please note that the offer of
                                    appointment is subject to satisfactory completion of
                                    your
                                    reference check, and medical examination (if needed).</p>
                              <p className="lower-salutation-offer">Name: Jasmeet Kaur<br />
                                    SAER Technologies Private Limited<br />
                                    Email: hr@saertechnologies.com
                              </p>
                              <div className="footer-offer-1">
                                    <p className="footer-section-offer"><strong>Registered Office:</strong>
                                          SAER TECHNOLOGIES PVT. LTD. 450, B2, Loknayak
                                          Puram, New Delhi, 110041
                                          <br /></p>
                                    <p className="footer-section-offer"><strong>Office :</strong> SAER
                                          TECHNOLOGIES PVT. LTD. Shop No-52, Model Town B,
                                          Malviya Nagar, Jaipur ,302017</p>
                                    <p className="footer-section-offer"><strong>Ph:</strong> +91 93126
                                          00755
                                          <strong>Email:</strong> admin@saertechnologies.com
                                          <strong>Website:</strong> www.saertechnologies.com</p>
                                    <p className="footer-section-offer"><strong>CIN:</strong>
                                          U72900DL2022PTC403443</p>
                              </div>
                              {/* <input type="button" value="Print" onClick="window.print()"> </input> */}
                        </text>
                        </>
                              )
                        })
                  }
                  </div>
                  
                  <div>
                        <img src={Logo} alt='error' className='sear-logo-offer' />
                        <p className="upper-content-offer-2">After you accept this offer, you will be
                              issued a joining letter indicating the details of
                              your joining date and initial place of your posting.Your offer
                              is subject to a positive
                              background check.
                        </p>
                        <p className="main-content-offer">
                              As a part of the joining process, you are requested to bring
                              the following documents on
                              the day of joining.<br />

                              Photocopies of:-
                               <doclist className="doclist-offer"> 
                                    <ol type="1"  className="doclist-offer">
                                          <li> Marksheet</li>
                                          <li> Degree</li>
                                          <li> Relieving letter the previous organization or accepted resignation letter</li>
                                          <li>Experience letter</li>
                                          <li>Form 16 Income tax from previous employer If applicable</li>
                                          <li>5 Passport size photos</li>
                                    </ol>
                               </doclist> 
                        </p>
                        <p className="lower-content-offer">Please bring the original education certificates, marksheets for verification.</p>
                        <p className="lower-salutation-offer">With Regards,<br />
                              Yours Sincerely,<br />
                             
                        </p>
                        <p className="director-offer">Dharma Ram<br />
                              Director<br />
                              SAER Technologies Private Limited
                        </p>
                        <p className="last-section-offer">P.S for any further clarifications
                              here after kindly write to hr@saertechnologies.com
                        </p>
                        <div className="footer-offer-2">
                              <p className="footer-section-offer"><strong>Registered Office:</strong>
                                    SAER TECHNOLOGIES PVT. LTD. 450, B2, Loknayak
                                    Puram, New Delhi, 110041
                                    <br /></p>
                              <p className="footer-section-offer"><strong>Office :</strong> SAER
                                    TECHNOLOGIES PVT. LTD. Shop No-52, Model Town B,
                                    Malviya Nagar, Jaipur ,302017</p>
                              <p className="footer-section-offer"><strong>Ph:</strong> +91 93126
                                    00755
                                    <strong>Email:</strong> admin@saertechnologies.com
                                    <strong>Website:</strong> www.saertechnologies.com</p>
                              <p className="footer-section-offer"><strong>CIN:</strong>
                                    U72900DL2022PTC403443</p>
                        </div>
                  </div>
            </div>

      )
}
export default OfferLetter