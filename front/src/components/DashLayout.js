import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './Dashboard/DashHeader'
import DashFooter from './Dashboard/DashFooter'
import Sidebar from './sidebar/Sidebar'


const DashLayout = () => {

  return (
    <>

    <div className='dash-container'>
        <DashHeader />
        <Sidebar />
        <Outlet />
        <DashFooter />
    </div>
    </>
  )
}

export default DashLayout