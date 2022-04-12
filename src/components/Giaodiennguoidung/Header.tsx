import React from 'react'
import './Style-header.css'
import Logo from './assets/chusecret-kophong.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="logo-1" />
        </div>
        <div className="header__search">
          <input type="text" placeholder="Tìm kiếm" />
          <i className="bx bx-search-alt-2"></i>
        </div>
        <div className="logout">
          <Link to="/login">Đăng xuất</Link>
        </div>
      </div>
    </div>
  )
}
