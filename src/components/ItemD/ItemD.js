

import "./ItemD.css"

import { ItemCount } from "../ItemCount/ItemCount"

import React, { useContext, useState } from "react"

import { CartContext } from "../../Context/CartContext"

import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Disclaimer = () =>{
    return(
        <>
        <p>Every track has been professionally mixed and mastered. Alongside the music tracks, all purchases will also be provided a full data list of  the contents. This includes: LOUDNESS, Sample rate, Bit depth, CBR (Constant Bit Rate), Surround encoding etc all of which is necessary when using the audio on different platforms or passing data on.</p>
                <p className="details">Techinal Details:</p>
                <ul className="ulItemD">
                    <li>FIle Type – mp3</li>
                    <li>File Type – wav</li>
                    <li>Channels – 2 (stereo)</li>
                    <li>Sample Rate – 44.1khz</li>
                    <li>Bit Depth – 16b</li>
                    <li>DBLUFS – 14 (+/-2) LT</li>
                </ul>
                <p className="recorded">Composed and recorded by Manuel Benamo</p>
        </>
    )
}


export const ItemD = ({title, pictureUrl, price, description,stock}) => {

    const {cartUpdate} = useContext(CartContext)

    const {cart} = useContext(CartContext)

    const {quantityUpdate} = useContext(CartContext)

    const [count, setCount] = useState(0)

    const onAdd = value => setCount(value)

    const {user} = useContext(CartContext)
    

    const cartPush = (title, price, quantity, pictureUrl,stock) =>{
       
        const duplicate = cart.some(item=>item.title===title)
        

        if(duplicate){
            const cartQ = cart.find(q=>{
                return q.title === title
            })
            const q = cartQ.quantity + quantity
            if(q<=stock){
                quantityUpdate(title, q)
            } else {
                quantityUpdate(title, stock)
                toast.error("Not enough stock!")
            }
            
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
            <div className="cardD col-lg-6 col-md-8">
                <img className="cardImgD" alt="lala" src={pictureUrl}></img>
                <h3 className="itemDPrice">Price: ${price}</h3>
                <h3 className="itemDCount">{count}</h3>
                <ItemCount stockCount={stock} changeCount={onAdd}/>
                <div>
                    <button onClick={(e)=>{if(count>0){cartPush(title,price,count,pictureUrl,stock)}else{toast.error("No items selected!")}}} className="btn btnAgregar btn-primary">Add to cart</button>
                    {(cart.length>0)? <button onClick={(e)=>{if(cart.length>0){itemNavigator()}else{toast.error("Cart is empty!")}}} className="btn btnAgregar btn-primary">Checkout</button>:<></>}
                </div>
                <ToastContainer />
            </div>
            <div className="col-lg-4 col-md-4 pDescription">
                <p className="recorded">{description}</p>
                <Disclaimer/>
            </div>
        </div>
    </>
    )
}