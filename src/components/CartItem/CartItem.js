import "./CartItem.css"


import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export const CartItem = ({title, pictureUrl, price, quantity}) => {

const {removeItem} = useContext(CartContext)

const rmvItem = (title) =>{
    return removeItem(title)

}

    return (
        <div className="cartCard">
            <img className="cartCardImg" alt="lala" src={pictureUrl}></img>
            <div className="cartDiv">
                <h2>{title}</h2>
                <h3>Price: ${price}</h3>
                <div>
                    <h3>Quantity: {quantity}</h3>
                    <button className="btn btn-secondary" onClick={(e)=>rmvItem(title)}>Remove</button>
                </div>
                
            </div>
        </div>
    
    )
}