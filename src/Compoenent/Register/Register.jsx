import React from 'react'
import './Register.css'

const Register = () => {
    
  return (
   <>
      <div className="Register-header">
        <h1 className='Register-heading'>Registrations</h1>
    </div>

    <div className="form-register">
        <p className='form-heading'>Registration Link : </p>
        <a href='#' className='form-link'>https://forms.gl</a>
    </div>

    <div className="fees">
        <p className='fees-heading'>Registration Fees</p>
        <table className='fees-table'>
      <tbody>
        <tr>
          <td className='table-data'>Student</td>
          <td className='table-data'></td>
          <td className='table-data'></td>
        </tr>
        <tr>
          <td className='table-data'>Faculty</td>  
          <td className='table-data'></td>
          <td className='table-data'></td>
        </tr>
        <tr>
          <td className='table-data'>Industry</td>
          <td className='table-data'></td>
          <td className='table-data'></td>
        </tr>
        <tr>
          <td className='table-data'>Accompanying Person</td>
          <td className='table-data'></td>
          <td className='table-data'></td>
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