import React from 'react'
import './JobsPage.css'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import ViewJobVacancy from '../../components/JobComponents/JobVacancy/ViewJobVacancy/ViewJobVacancy'

const JobsPage = () => {
  return (
    <div className='main-container'>
      <div className='left-section'>
        <SideBar/>
      </div>
      <div className='right-section'>
        <div className='top-section'>
          <TopBar/>
        </div>
        <div className='main-section'>
          <ViewJobVacancy/>
        </div>
      </div> 
    </div>
  )
}

export default JobsPage