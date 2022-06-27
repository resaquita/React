import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
export const Cart = () =>{
    const {cart} = useContext(CartContext)

    return (
        <div className="row cartRow">
            <h1>Cart</h1>
            <div className="row rowItemList">
            {cart?.length <= 0? <h1>loading...</h1> : cart.map((item) => (
                <CartItem key={item.id} {...item}/>
            ))}
            </div>
            <div className="row cartBotRow">
                <button className="btn btn-danger btnRmv">Remove All</button>
            </div>
        </div>
     )
}