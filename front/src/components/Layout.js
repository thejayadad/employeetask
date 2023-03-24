import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div className="outlet">
      <Outlet />
    </div>
  )
}

export default Layout