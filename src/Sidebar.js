import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Home,TrendingUp, Subscriptions, VideoLibrary, History } from '@mui/icons-material'
import { PlayCircleFilled, WatchLater, ThumbUp, ExpandMore } from '@mui/icons-material'


function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title="Home"/>
      <SidebarRow Icon={TrendingUp} title="Trending"/>
      <SidebarRow Icon={Subscriptions} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibrary} title="Library"/>
      <SidebarRow Icon={History} title="History"/>
      <SidebarRow Icon={PlayCircleFilled} title="Your Videos"/>
      <SidebarRow Icon={WatchLater} title="Watch later"/>
      <SidebarRow Icon={ThumbUp} title="Liked Videos"/>
      <SidebarRow Icon={ExpandMore} title="Show More"/>
      <hr/>
    </div>
  )
}

export default Sidebar
