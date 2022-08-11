import { addDoc, collection, Firestore, getFirestore, snapshotEqual } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCart } from "./EmptyCart";
import {useNavigate} from "react-router-dom";

export const Cart = () =>{

    const {cart} = useContext(CartContext)

    const {removeAll} = useContext(CartContext)

    const {user} = useContext(CartContext)

    const [total, setTotal] = useState(0)

    let navigate = useNavigate();

    useEffect(()=>{
        const priceTotal = cart.map((item)=>{
            const a=item.count*item.price
            return a
        })
        const sum = priceTotal.reduce((partialSum, a) => partialSum + a, 0);
        setTotal(sum)
    },[cart])

    const sendOrder = () => {
        const date = new Date().toLocaleString() + ""
        const items = cart.map((item)=>{
            return ({title:item.title,
            count:item.count,
            price:item.price,})
        })
            const order = {
                user,
                items,
                date,
                total
            };
            
            const db = getFirestore();
            const ordersCollection = collection(db, "Orders");
            addDoc(ordersCollection, order).then(({id})=>navigate("/checkout", { state: {id} }));
            
        }

    return (
        <div className="row cartRow">
            <h1 className="cartItemTitle">Cart</h1>
            
        {cart?.length <= 0? <EmptyCart/> : <div> {cart.map((item) => (
            <div key={item.id} className="row rowItemList">
            <CartItem {...item}/>
            </div>
        ))}<div className="row cartBotRow">
            <h3 className="priceTotal">The total is ${total}</h3>
            <button className="btn btn-danger btnRmv" onClick={removeAll}>Remove All</button>
            <button className="btn btn-success btnRmv" onClick={sendOrder}>Check out</button>
            </div>
            </div>}
            
        </div>
     )
}