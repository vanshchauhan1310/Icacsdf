import React from 'react'
import './Register.css'

const Register = () => {
    
  return (
   <>
      <div className="Register-header">
        <h1 className='Register-heading'>Registrations</h1>
        
    </div>

    <div className="form-register">
      
      <div className="Normal-register">
        <p className='form-heading'>Registration Link : </p>
        <a href='#' className='form-link'>https://forms.gl</a>
      </div>
     
      <div className="tcp-register">
        <p className='form-heading'>Technical Program Committee (TPC) Form : </p>
        <a href='https://forms.gle/uPofiGge5Czu8nQz9' className='form-link'>https://forms.gl</a>
      </div>
       
    </div>

    <div className="fees">
        <p className='fees-heading'>Registration Fees</p>
        <table className='fees-table'>
      <tbody>
        <tr>
          <td className='table-data table-heading'>Category</td>
          <td className='table-data table-heading'>Registration Deadline</td>
      
        </tr>
        <tr className='combined'>
          <td className='rowspan'>INDIAN DELEGATES (INR)</td>  
          {/* <td className='table-data'></td> */}
     
        </tr>
        <tr>
          <td className='table-data'>Regular Author</td>
          <td className='table-data'>11000</td>
       
        </tr>
        <tr>
          <td className='table-data'>Students Author</td>
          <td className='table-data'>10500</td>
        </tr>
        <tr>
          <td className='table-data'>Industry Professional</td>
          <td className='table-data'>12500</td>
        </tr>
        <tr>
          <td className='table-data'>2nd paper, Regular Author</td>
          <td className='table-data'>10000</td>
        </tr>
        <tr>
          <td className='table-data'>Listener (Non-Author/Co- Author/General Participants)</td>
          <td className='table-data'>5000 (per person)</td>
        </tr>

        <tr className='combined'>
          <td className='rowspan'>INTERNATIONAL DELEGATES (US $)</td>  
          <td className='table-data'></td>
        </tr>

        <tr>
          <td className='table-data'>Regular Author</td>
          <td className='table-data'>	350</td>
        </tr>
        <tr>
          <td className='table-data'>Students Author</td>
          <td className='table-data'>300</td>
        </tr>
        <tr>
          <td className='table-data'>2nd paper, Regular Author</td>
          <td className='table-data'>250</td>
        </tr>
        <tr>
          <td className='table-data'>Listener (Non-Author/Co- Author/General Participants)</td>
          <td className='table-data'>150</td>
        </tr>


        <tr className='combined'>
          <td className='rowspan'>WORKSHOP</td>  
          <td className='table-data'></td>
        </tr>

        <tr>
          <td className='table-data'>Registered Authors of ICACSDF 2025</td>
          <td className='table-data'>	Free</td>
        </tr>
        <tr>
          <td className='table-data'>Non-Author/General Participants</td>
          <td className='table-data'>4000(Indian Rupees)per person</td>
        </tr>

      </tbody>
    </table>
    </div>

    <div className="payment">
        <p className='payment-heading'>Payment Details</p>
        <table className='pay-table'>
      <tbody>
        <tr>
          <td className='table-data'>Bank Name</td>
          <td className='table-data'>Dummy Bank Ltd.</td>
        </tr>
        <tr>
          <td className='table-data'>Branch Address</td>  
          <td className='table-data'>Dummy Address, City, State - 123456</td>
        </tr>
        <tr>
          <td className='table-data'>Bank Account Holder Name</td>
          <td className='table-data'>University Of Petroleum And Energy Studies</td>
        </tr>
        <tr>
          <td className='table-data'>Bank Account No.</td>
          <td className='table-data'>000000000000</td>
        </tr>

        <tr>
          <td className='table-data'>IFSC Code</td>
          <td className='table-data'>DUMMY000000</td>
        </tr>

        <tr>
          <td className='table-data'>SWIFT Code</td>
          <td className='table-data'>DUMMYINBBXXX</td>
        </tr>

        <tr>
          <td className='table-data'>MICR Code</td>
          <td className='table-data'>123456789</td>
        </tr>
      </tbody>
    </table>
    </div>




   </>
  )
}

export default Register