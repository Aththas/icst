import React from 'react'
import './JobSection.css'

const jobs = [
    {
        id: 1,
        title: 'Specialist - Database Administration',
        company: 'ICST University Park',
        location: 'Admin Building - 3rd Floor',
        closingDate: '10/31/2024',
        vacancy: '01',
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'ICST University Park',
        location: 'Admin Building - 2nd Floor',
        closingDate: '10/31/2024',
        vacancy: '02',
    },
];

const JobSection = () => {
  return (
    <div className="job-list-container">
            <h1>All Jobs</h1>
            <p>You can submit your job application to the job bank for the future job opening(s)</p>
            <button className="submit-button">Submit your job application</button>
            <div className="job-cards">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h3>{job.title} <span className="job-priority">{job.vacancy}</span></h3>
                        <br></br>
                        <p>{job.company}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="closing-date">Closing Date: <strong>{job.closingDate}</strong></p>
                        <button className="apply-button">Apply for job</button>
                        <button className="view-details-button">View Details</button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default JobSection