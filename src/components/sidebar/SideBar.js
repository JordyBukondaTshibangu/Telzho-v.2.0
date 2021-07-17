
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'


const SideBar = ({closeModal}) => {
  return (
    <div className="overlay" onClick={closeModal}>
        <div className="dash-board" >
          <div className="heading">
              <h3>Settings</h3>
          </div>
          <ul >
            <li className="menu-item" >
              <Link className="link" to="/" >General</Link>
            </li>

            <li className="menu-item" >
              <Link className="link" to="/userprofile" >User Profile</Link>
            </li>
            <li className="menu-item" >
              <Link className="link" to="/privacy" >Privacy &amp; Security</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}


export default SideBar;