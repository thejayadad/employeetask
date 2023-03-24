import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './Dashboard/DashHeader'
import DashFooter from './Dashboard/DashFooter'
import Sidebars  from './sidebar/Sidebars'


const DashLayout = () => {

  return (
    <>

    <div className='dash-container'>
        <Sidebars />
        <DashHeader />
        <Outlet />
        <DashFooter />
    </div>
    </>
  )
}

export default DashLayout