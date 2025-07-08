import React from 'react'
import './Player.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Player = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { videoKey, title, date, type } = location.state || {}

  if (!videoKey) {
    return <p style={{ color: 'white', textAlign: 'center' }}>No trailer available</p>
  }

  return (
    <div className='player'>
      <img src="/back_arrow_icon.png" alt="Back" onClick={() => navigate(-1)} className="back-icon" />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${videoKey}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p><strong>Published Date:</strong> {date}</p>
        <p><strong>Name:</strong> {title}</p>
        <p><strong>Category:</strong> {type}</p>
      </div>
    </div>
  )
}

export default Player
