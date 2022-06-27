

import "./ItemD.css"

import { ItemCount } from "../ItemCount/ItemCount"

import React, { useContext, useState } from "react"

import { CartContext } from "../../Context/CartContext"

import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const ItemD = ({title, pictureUrl, price, description}) => {

    const {cartUpdate} = useContext(CartContext)

    const {cart} = useContext(CartContext)

    const {quantityUpdate} = useContext(CartContext)

    const [count, setCount] = useState(0)

    const onAdd = value => setCount(value)

    const cartPush = (title, price, quantity, pictureUrl) =>{
       
        const duplicate = cart.some(item=>item.title===title)

        if(duplicate){
            console.log("item already added")
            quantityUpdate(title, quantity)
        }else{
             cartUpdate({title, price, quantity, pictureUrl});
        console.log("agregando")
    }
    }

    let navigate = useNavigate()

    

    return (
    <>
        <div className="card col-lg-4">
            <img className="cardImg" alt="lala" src={pictureUrl}></img>
            <h3>${price}</h3>
            <h3>{count}</h3>
            <ItemCount changeCount={onAdd}/>
            <button onClick={(e)=>{if(count>0){cartPush(title,price,count,pictureUrl)}else{toast.error("Cart is empty!")}}} className="btn btnAgregar btn-primary">Checkout</button>
            <ToastContainer />
        </div>
        <div className="col-lg-4 pDescription">
            <h3>{title}</h3>
            <p >{description}</p>
        </div>
    </>
    )
}