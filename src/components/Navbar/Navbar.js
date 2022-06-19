import "./Navbar.css"

import React from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom"

export const Navbar = () => {
    return ( <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Videogame Music</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/SFX">SFX</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Music">Songs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Pack">Music</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  </nav></div>)
}

