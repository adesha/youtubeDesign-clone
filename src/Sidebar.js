import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Home,TrendingUp, Subscriptions } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={Home} title="Home"/>
      <SidebarRow Icon={TrendingUp} title="Trending"/>
      <SidebarRow Icon={Subscriptions} title="Subscription"/>
    </div>
  )
}

export default Sidebar
