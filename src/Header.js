import React from 'react'
import './Header.css'
import { Menu } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import youtubelogo from './images/youtubeLogo.jpg'
import profilePhoto from './images/219970.png'
import { VideoCall } from '@mui/icons-material'
import { Notifications } from '@mui/icons-material'
import { Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
      <Menu/>
      <img className='header-logo' src={youtubelogo} alt=''/>
      </div>
      <div className='header-middle'>
      <input placeholder='Search' type='text'/>
      <Search className='header-inputButton'/>
      </div>
      <div className='header-right'>
      <VideoCall className='header-icon'/>
      <Apps className='header-icon'/>
      <Notifications className='header-icon'/>
      <Avatar className='header-icon' src={profilePhoto} alt='Adesha'/>
      </div>
    </div>
  )
}

export default Header
