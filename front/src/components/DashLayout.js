import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './Dashboard/DashHeader'
import DashFooter from './Dashboard/DashFooter'
import Sidebars  from './sidebar/Sidebars'


const DashLayout = () => {

  return (
    <>

    <div className='dash-container'>
      <DashHeader />
        <Sidebars />
        <Outlet />
        <DashFooter />
    </div>
    </>
  )
}

export default DashLayout