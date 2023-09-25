import React, { useEffect, useState } from 'react'
import './RelivingLetter.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from './searlogo.png'
function RelievingLetter() {
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
      const [Post, setPost] = React.useState([]);
      const [gender, setgender] = useState('');
      const [salutation1,setsalutation1] = useState('');
      const [salutation2,setsalutation2] = useState('');
      const [marital,setmarital]=useState('');
      const { data2 } = location.state;
      useEffect(() => {
            const sendData = async (data2) => {
                  try {
                        const response = await axios.post('http://localhost:8000/api/relievingletter', {
                              employeeId: data2,
                        });
                        // console.log(response.data);
                        setPost(response.data);
                        setgender(response.data[0].gender);
                        setmarital(response.data[0].maritalStatus)
                  } catch (error) {
                        console.error(error);
                  }
            };
            sendData(data2);
      }, [])
      useEffect(()=>{
            if(gender==='Male'){
                  setsalutation1('him')
                  setsalutation2('Mr')
            }
            else if(gender==='Female'){
                  if(marital==='Single'){
                        setsalutation2('Miss ')
                  }else if(marital==='Married'){
                        setsalutation2('Mrs ')
                  }
                  setsalutation1('her')
                  setsalutation2('Mrs')
            }
      },[gender])
      return (
            <div>
                  {
                        Post.map((Post, index) => {
                              return (
                                    <>
                                    
                                          <img src={Logo} alt='error' className='sear-logo-relieving' />
                                          <h3 className="heading-relieving">Relieving Letter</h3>
                                          <p className="company-name-relieving">SAER TECHNOLOGIES PRIVATE LIMITED</p>
                                          <p className="letter-title-relieving">
                                                Date: {currentDate}<br />
                                               {salutation2} {Post.name}<br />
                                                {Post.pAddress}<br />
                                                {Post.pCity}<br />
                                                {Post.pState}<br />
                                          </p>
                                          <p className="salutation-relieving">Dear {Post.name},<br/></p>
                                          <p className="upper-content-relieving">This is to acknowledge receipt of
                                                your resignation letter dated {currentDate}.<br />
                                                While accepting the same we thank you for the
                                                association you had with us during the
                                                tenure from {Post.joiningDate} to {Post.lastWorkingDate}.
                                          </p>
                                          <p className="lower-content-relieving">You have been relieved from your
                                                service with effect from the closing working hours of {Post.lastWorkingDate}.<br />
                                                We wish you all the best in your future career.
                                          </p>
                                          <p className="lower-salutation-relieving">With Regards,<br />
                                                Yours Sincerely,<br />
                                               
                                          </p>
                                          <p className="director-relieving">Dharma Ram<br />
                                                Director<br />
                                                SAER Technologies Private Limited
                                          </p>
                                          <p className="last-section-relieving">P.S for any further clarifications
                                                hereafter kindly write to hr@saertechnologies.com
                                          </p>
                                          <div className="footer-relieving">
                                                <p className="footer-section-relieving"><strong>Registered Office:</strong>
                                                      SAER TECHNOLOGIES PVT. LTD. 450, B2, Loknayak
                                                      Puram, New Delhi, 110041
                                                      <br /></p>
                                                <p className="footer-section-relieving"><strong>Office :</strong> SAER
                                                      TECHNOLOGIES PVT. LTD. Shop No-52, Model Town B,
                                                      Malviya Nagar, Jaipur ,302017</p>
                                                <p className="footer-section-relieving"><strong>Ph:</strong> +91 93126
                                                      00755
                                                      <strong>Email:</strong> admin@saertechnologies.com
                                                      <strong>Website:</strong> www.saertechnologies.com</p>
                                                <p className="footer-section-relieving"><strong>CIN:</strong>
                                                      U72900DL2022PTC403443</p>
                                          </div>
                                       
                                    </>
                              )
                        })
                  }
            </div>
      )

}

export default RelievingLetter