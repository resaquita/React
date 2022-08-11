import "./CartItem.css"
import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
export const CartItem = ({title, pictureUrl, price, count}) => {

const {removeItem} = useContext(CartContext)

const rmvItem = (title) =>{
    return removeItem(title)
}

    return (
        <div className="cartCard">
            <img className="cartCardImg" alt="lala" src={pictureUrl}></img>
            <div className="cartDiv">
                <h2 className="cartTitle">{title}</h2>
                <h3 className="cartPrice">Price: ${price}</h3>
                <div>
                    <h3>Quantity: {count}</h3>
                    <button className="btn btn-secondary" onClick={(e)=>rmvItem(title)}>Remove</button>
                </div>
                
            </div>
        </div>
    
    )
}