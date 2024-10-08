import React from 'react'
import './TopBar.css'
import logo from '../../../img/ICST.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-logo'>
        <img src={logo} alt='icst-logo'></img>
      </div>
      <div className='topbar-logout'>
          <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon'/>
      </div>
    </div>
  )
}

export default TopBar