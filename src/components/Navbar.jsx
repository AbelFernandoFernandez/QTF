import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><img src="https://firebasestorage.googleapis.com/v0/b/baseaff-8d2a8.appspot.com/o/qtftrans.png?alt=media&token=8c9a74ea-bc51-4877-ae82-fae00d6871b8" alt="Logo" width={150} /></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/productos">Productos</Link></li>
        <li><Link className="menu-link" to="/productos/budismo">Budismo</Link></li>
        <li><Link className="menu-link" to="/productos/norteño">Norteños</Link></li>
        <li><Link className="menu-link" to="/productos/sahumerio">Sahumerios</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default Navbar