import React, { useState } from 'react'
import './SideBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCaretDown, faCaretUp, faArchive, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [isJobSubListOpen,setJobListOpen] = useState(false);

  const JobSubList = () =>{
    setJobListOpen(!isJobSubListOpen);
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h2>ADMIN DASHBOARD</h2>
      </div>
      <div className='sidebar-menu'>
        <ul className='nav-list'>
          <li>
             <div className='list-item' onClick={JobSubList}>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Careers</p>
                <FontAwesomeIcon icon={isJobSubListOpen ? faCaretUp: faCaretDown } className='drop-down'/> 
             </div> 
             {isJobSubListOpen && (
                <ul className='sub-list'>
                  <li>
                    <Link to='/viewJob' className='list-item' onClick={JobSubList}>
                      <FontAwesomeIcon icon={faArchive} />
                      <p>Jobs</p>
                    </Link>
                  </li>
                  <li>
                    <Link to='/viewJob' className='list-item' onClick={JobSubList}>
                      <FontAwesomeIcon icon={faFolderOpen} />
                      <p>Job Applications</p>
                    </Link>
                  </li>
                </ul>
             )}    
          </li>
        </ul>
        </div>
    </div>
  )
}

export default SideBar