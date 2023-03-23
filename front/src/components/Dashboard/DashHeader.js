import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"

const DashHeader = () => {
  return (
    <nav>
        <i class='bx bx-menu' ></i>
        <Link to="/" >
            Dash
        </Link>

    </nav>
  )
}

export default DashHeader