

import "./ItemD.css"

import { ItemCount } from "../ItemCount/ItemCount"

import React, { useContext, useState } from "react"

import { CartContext } from "../../Context/CartContext"

import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const ItemD = ({title, pictureUrl, price, description,stock}) => {

    const {cartUpdate} = useContext(CartContext)

    const {cart} = useContext(CartContext)

    const {quantityUpdate} = useContext(CartContext)

    const [count, setCount] = useState(0)

    const onAdd = value => setCount(value)

    const {user} = useContext(CartContext)
    

    const cartPush = (title, price, quantity, pictureUrl) =>{
       
        const duplicate = cart.some(item=>item.title===title)

        if(duplicate){
            quantityUpdate(title, quantity)
        }else{
             cartUpdate({title, price, quantity, pictureUrl});
    }
    }
    const itemNavigator = () =>{
        if(!user.user){navigate("/login")}
        else{navigate("/cart")}
    }
    let navigate = useNavigate()
    
    return (
    <>
        <div className="row itemTitle">
            <h2>{title}</h2>
        </div>
        <div className="row">
            <div className="cardD col-lg-6 col-md-6">
                <img className="cardImgD" alt="lala" src={pictureUrl}></img>
                <h3 className="itemDPrice">Price: ${price}</h3>
                <h3 className="itemDCount">{count}</h3>
                <ItemCount stockCount={stock} changeCount={onAdd}/>
                <div>
                    <button onClick={(e)=>{if(count>0){cartPush(title,price,count,pictureUrl)}else{toast.error("No items selected!")}}} className="btn btnAgregar btn-primary">Add to cart</button>
                    {(cart.length>0)? <button onClick={(e)=>{if(cart.length>0){itemNavigator()}else{toast.error("Cart is empty!")}}} className="btn btnAgregar btn-primary">Checkout</button>:<></>}
                </div>
                <ToastContainer />
            </div>
            <div className="col-lg-4 col-md-4 pDescription">
                <p>{description}</p>
            </div>
        </div>
    </>
    )
}