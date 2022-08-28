import "./CartWidget.css"

import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import {useNavigate} from "react-router-dom"



export const CartWidget = () => {
    const {cart} = useContext(CartContext)

    const {user} = useContext(CartContext)

    const [count,setCount] = useState()

    const itemNavigator = () =>{
        if(!user.user){navigate("/login")}
        else{navigate("/cart")}
    }
    let navigate = useNavigate()

    useEffect(()=>{
        const cartCount = cart.reduce((partialSum, item) => partialSum + item.count, 0)
        setCount(cartCount)
    },[cart])
    
return <div>
        <img onClick={()=>itemNavigator()} className="widget" alt="widget" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"></img>
        <span className="countWidget">{count}</span>
    </div>
}