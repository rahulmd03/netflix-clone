import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="/facebook_icon.png" alt="Facebook" />
        <img src="/instagram_icon.png" alt="Instagram" />
        <img src="/twitter_icon.png" alt="Twitter" />
        <img src="/youtube_icon.png" alt="YouTube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
