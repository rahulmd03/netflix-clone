import React from 'react'
import "./NavBar.css"
import { logout } from '../../firebase'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src="/logo.png" alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className='icons' src="/search_icon.svg" alt="Search" />
        <p>Children</p>
        <img className='icons' src="/bell_icon.svg" alt="Notifications" />
        <div className="navbar-profile profile-menu">
          <img className='profile' src="/profile_img.png" alt="Profile" />
          <img src="/caret_icon.svg" alt="" />
          <div className="dropdown">
            <button onClick={()=>{logout()}} >Sign Out</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NavBar
