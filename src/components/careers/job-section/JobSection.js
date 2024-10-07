import React, { useState } from 'react'
import './JobSection.css'
import ViewJob from '../view-job/ViewJob';
import ApplyJob from '../apply-job/ApplyJob';

const jobs = [
    {
        id: 1,
        title: 'Database Administration',
        company: 'ICST University Park',
        location: 'Admin Building - 3rd Floor',
        closingDate: '10/31/2024',
        priority: '01',
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'ICST University Park',
        location: 'Admin Building - 2nd Floor',
        closingDate: '10/31/2024',
        priority: '02',
    },
];
const jobDescription = [
    "Work with Security Operations and other Information Security teams to manage security in public cloud infrastructure.",
    "Automate or assist the automation of relevant systems or applications to streamline the administration.",
    "Keep updating the corresponding stakeholders on relevant areas and new technologies.",
    "Provide necessary technical expertise/advice with respect to development and execution of all in-house applications subjected to cloud readiness.",
    "Collaborate with developers, management, and vendors to ensure secure applications being deployed to achieve all business objectives."
  ];

  const entryRequirements = [
    "Possess a degree or a Masters in Information Technology, Computer Science, or in a related field from a recognised University.",
    "Minimum 4+ years of experience in handling similar scope in a critical and dynamic work environment.",
    "Related Industry certifications are preferred."
  ];

const JobSection = () => {
    const [isFormOpen,setFormOpen] = useState(false);
    const [isSelectedJob,setSelectedJob] = useState(null);
    const [isApplyFormOpen,setApplyFormOpen] = useState(false);

    const openForm = (job) => {
        setFormOpen(true);
        setSelectedJob(job);
    }

    const closeForm = () => {
        setFormOpen(false);
        setSelectedJob(null);
    }

    const openApplyForm = (job) => {
        setApplyFormOpen(true);
        setSelectedJob(job);
    }

    const closeApplyForm = () => {
        setApplyFormOpen(false);
        setSelectedJob(null);
    }

  return (
    <div className="job-list-container">
            <h1>All Jobs</h1>
            <p>You can submit your job application to the job bank for the future job opening(s)</p>
            <button className="submit-button" onClick={openApplyForm}>Submit your job application</button>
            <div className="job-cards">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h3>{job.title} <span className="job-priority">{job.priority}</span></h3><br></br>
                        <p>{job.company}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="closing-date">Closing Date: <strong>{job.closingDate}</strong></p>
                        <button className="apply-button" onClick={() => openApplyForm(job)}>Apply for job</button>
                        <button className="view-details-button" onClick={() => openForm(job)}>View Details</button>
                    </div>
                ))}
            </div>
            {isFormOpen && isSelectedJob &&(
                <div className='popup-container'>
                    <div className='popup'>
                        <button className='close-button' onClick={closeForm}>X</button>
                        <ViewJob
                            jobTitle={isSelectedJob.title}
                            jobDescription={jobDescription}
                            jobRequirements={entryRequirements}
                        />
                    </div>
                </div>
            )}
            {isApplyFormOpen && isSelectedJob &&(
                <div className='popup-container'>
                <div className='popup-apply'>
                    <button className='close-button' onClick={closeApplyForm}>X</button>
                    <ApplyJob
                        jobTitle={isSelectedJob.title}
                    />
                </div>
            </div>
            )}
        </div>
  )
}

export default JobSection