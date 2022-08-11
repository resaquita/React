import "./CartWidget.css"

import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"



export const CartWidget = () => {
    const {cart} = useContext(CartContext)

    const [count,setCount] = useState()

    useEffect(()=>{
        const cartCount = cart.reduce((partialSum, item) => partialSum + item.count, 0)
        setCount(cartCount)
    },[cart])
    
return <div>
    <Link className="divWidget" to="/cart"> 
        <img className="widget" alt="widget" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"></img>
    </Link>
    <span className="countWidget">{count}</span>
</div>
}