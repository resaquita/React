import "./CartWidget.css"

import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"



export const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
return <div>
    <Link className="divWidget" to="/cart"> 
        <img className="widget" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"></img>
    </Link>
    <span className="countWidget">{cartQuantity()}</span>
</div>
}