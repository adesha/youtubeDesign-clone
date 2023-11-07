import React from 'react'
import './SidebarRow.css'

function SidebarRow({Icon,title}) {
  return (
    <div className='sidebarRow'>
        <Icon/>
      <h1>{title}</h1>
    </div>
  )
}

export default SidebarRow
