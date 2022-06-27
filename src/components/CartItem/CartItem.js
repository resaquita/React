import "./CartItem.css"


import React from "react"

export const CartItem = ({title, pictureUrl, price, quantity}) => {
    return (
        <div className="cartCard">
            <img className="cartCardImg" alt="lala" src={pictureUrl}></img>
            <div className="cartDiv">
                <h2>{title}</h2>
                <h3>Price: ${price}</h3>
                <div>
                    <h3>Quantity: {quantity}</h3>
                    <button className="btn btn-secondary">Remove</button>
                </div>
                
            </div>
        </div>
    
    )
}