import React from 'react'
import { Menu } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import youtubelogo from './images/youtubeLogo.jpg'
import profilePhoto from './images/Adesha.jpg'
import { VideoCall } from '@mui/icons-material'
import { Notifications } from '@mui/icons-material'
import { Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'
function Header() {
  return (
    <div className='header'>
      <Menu/>
      <img className='header-logo' src={youtubelogo} alt=''/>
      <input type='text'/>
      <Search/>
      <VideoCall/>
      <Apps/>
      <Notifications/>
      <Avatar src={profilePhoto} alt='Adesha'/>
    </div>
  )
}

export default Header
