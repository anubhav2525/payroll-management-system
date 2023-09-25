import React, { useEffect} from 'react'
import './Salaryslip.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function Salaryslip() {
      const location = useLocation();
      const [Post, setPost] = React.useState([]);
      const { data1, data2 } = location.state;
      useEffect(() => {
            const sendData = async (data1, data2) => {
                  try {
                        const response = await axios.post('http://localhost:8000/api/view-attendance', {
                              employeeId: data1,
                              month: data2,
                        });
                        const response2 = await axios.post('http://localhost:8000/api/employee-detail', {
                              employeeId: data1,
                        });
                        console.log(response.data);
                        console.log(response2.data);
                        setPost(response.data);
                        
                  } catch (error) {
                        console.error(error);
                  }
            };
            sendData(data1, data2);
      }, [])
      return (
            <div className='center'>
                  <form>
                        {
                              Post.map((Post, index) => {
                                    return (
                                          <table border="4" className='table1'>
                                                <tr className="logo-row">
                                                      <th colspan="2" className="border-logo">
                                                            <p className="logos">SAER</p>
                                                      </th>
                                                      <th colspan="2">
                                                            <p className="company-details">SAER
                                                                  TECHNOLOGIES PVT. LTD.</p>
                                                            <p className="company-address">Shop No-52, Model Town B, 
                                                            <br /> Malviya Nagar, Jaipur -302017</p>
                                                            <p className="salary-slip">Payslip for the {Post.month}</p>
                                                      </th>
                                                </tr>
                                                <tr>
                                                      <th className="data">Employee Name :</th>
                                                      <td className="record-border">{Post.name}</td>
                                                      <th className="data">Bank Name :</th>
                                                      <td className="record-no-border">{Post.bankName}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Designation :</th>
                                                      <td className="record-border">{Post.designation}</td>
                                                      <th className="data">Bank Account No. :</th>
                                                      <td className="record-no-border">{Post.bankAccountNumber}</td>
                                                </tr>

                                                <tr>
                                                      <th className="data">UAN No. :</th>
                                                      <td className="record-border">{Post.uanNo}</td>
                                                      <th className="data">PAN No. :</th>
                                                      <td className="record-no-border">{Post.pancardId}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Location :</th>
                                                      <td className="record-border">Jaipur</td>
                                                      <th className="data">Working Days :</th>
                                                      <td className="record-no-border">{Post.total_working_days}</td>

                                                </tr>
                                                <tr>
                                                      <th className="data">LOP :</th>
                                                      <td className="record-border">{Post.lop}</td>
                                                      <th className="data">ESIC No. :</th>
                                                      <td className="record-no-border">{Post.esic}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Created at :</th>
                                                      <td className="record-border">{Post.created_at}</td>
                                                      <th className="data">Receipt No. :</th>
                                                      <td className="record-no-border">{Post.salaryId}</td>
                                                </tr>
                                                <tr>
                                                      <th colspan="4" className="borders">&nbsp;</th>
                                                </tr>
                                                <tr>
                                                      <th colspan="2" className="headingss">Earnings</th>
                                                      <th colspan="2" className="headings">Deductions</th>
                                                </tr>
                                                <tr>
                                                      <th className="headings-item-right">Particulars</th>
                                                      <th className="headings-item-right">Amount (Rs)</th>
                                                      <th className="headings-item-right">Particulars</th>
                                                      <th className="headings-item-left">Amount (Rs)</th>
                                                </tr>
                                                <tr>
                                                      <th className="data">Basic</th>
                                                      <td className="record-border">{Post.calculateBasic}</td>
                                                      <th className="data">PF Employee</th>
                                                      <td className="record-no-border">{Post.calculate_pf}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">HRA</th>
                                                      <td className="record-border">{Post.calculateHra}</td>
                                                      <th className="data">ESI Employee</th>
                                                      <td className="record-no-border">{0}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Special Allowance</th>
                                                      <td className="record-border">{Post.calculate_special_allowance}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Paid Leave</th>
                                                      <td className="record-border">{Post.paid_leave}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">OT</th>
                                                      <td className="record-border">{Post.calculateOt}</td>
                                                </tr>
                                                <tr>
                                                      <th className="data">Sales Bonus</th>
                                                      <td className="record-border">{Post.calculate_sales_bonus}</td>
                                                </tr>
                                                <tr>
                                                      <th className="gross">Gross Earnings (Rs)</th>
                                                      <td className="gross-record-left">{Post.calculate_gross_salary}</td>
                                                      <th className="gross">Gross Deductions (Rs)</th>
                                                      <td className="gross-record">{Post.calculate_pf}</td>
                                                </tr>
                                                <tr>
                                                      <th colspan="4" className="borders">&nbsp;</th>
                                                </tr>
                                                <tr>
                                                      <th colspan="3" className="headings">Net Salary Payable (Rs)</th>
                                                      <th className="record">{Post.calculatenetsalary}</th>
                                                </tr>
                                                <tr>
                                                      <th colspan="2" align="left" className="border-remove-bottom">Employee Signature</th>
                                                      <th colspan="2" align="left" className="border-remove-bottom">Employer Signature</th>
                                                </tr>
                                          </table>
                                    )
                              })
                        }
                        <button className='downloadbutton'onClick={() => window.print()}>Print</button>
                  </form>
            </div>
      )
}

export default Salaryslip
