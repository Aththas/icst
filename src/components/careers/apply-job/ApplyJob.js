import React from 'react'
import './ApplyJob.css'
const ApplyJob = ({jobTitle}) => {
    console.log(jobTitle);
  return (
    <form className="file-upload-form">
      <div className="form-group">
        <label htmlFor="title">{jobTitle !== undefined ? jobTitle:"Job Pool"}</label>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name: <span className='red'>*</span></label>
        <input
          type="text"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email: <span className='red'>*</span></label>
        <input
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cv">Upload CV: <span className='red'>*</span></label>
        <input
          type="file"
          name="cv"
          id="cv"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="letter">Upload Cover Letter: <span className='red'>*</span></label>
        <input
          type="file"
          name="letter"
          id="letter"
          required
        />
      </div>

      <button type="submit" className="submit-btn">Apply Job</button>
    </form>
  )
}

export default ApplyJob