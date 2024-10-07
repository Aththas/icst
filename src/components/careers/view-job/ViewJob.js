import React from 'react'
import './ViewJob.css'
const ViewJob = ({ jobTitle, jobDescription, jobRequirements}) => {
  return (
        <div className="job-details-container">
            <h2>About {jobTitle} Vacancy</h2>
          <div className="job-details-section">
            <div className="section">
              <h5>Description</h5>
              <ul>
                {jobDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h5>Entry Requirements</h5>
              <ul>
                {jobRequirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  )
}

export default ViewJob