import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCart } from "./EmptyCart";

export const Cart = () =>{

    const {cart} = useContext(CartContext)

    const {removeAll} = useContext(CartContext)

    return (
        <div className="row cartRow">
            <h1>Cart</h1>
            
        {cart?.length <= 0? <EmptyCart/> : <div> {cart.map((item) => (
            <>
            <div className="row rowItemList">
            <CartItem key={item.id} {...item}/>
            </div>
            </>
        ))}<div className="row cartBotRow">
            <button className="btn btn-danger btnRmv" onClick={removeAll}>Remove All</button>
            </div>
            </div>}
            
        </div>
     )
}