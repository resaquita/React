import { useContext, useEffect, useState } from "react";
import "./Checkout.css"
import { useLocation } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { BounceLoader } from "react-spinners";
import { CartContext } from "../../Context/CartContext";

export const Checkout = () =>{
    const { state } = useLocation();
    const orderId = state.id
    const [order, setOrder] = useState()
    const [username, setUsername] = useState()
    const [itemList, setItemlist] = useState()
    const{removeAll} = useContext(CartContext)

    useEffect(()=>{
        const db = getFirestore();  

        const checkoutOrder = doc(db, "Orders", orderId);
        getDoc(checkoutOrder).then((snapshot)=>{
            if (snapshot.exists()){
                setOrder({id: snapshot.id, ...snapshot.data()})
                removeAll();
            }
        })
    },[])
    
    useEffect(()=>{
        if(order!=undefined){
            setUsername(order.user);
            setItemlist(order.items);}
    },[order]); 
    
    
    
    return (
        <div className="container">
            <div className="row rowCheckout">
                {order!=undefined&& username!=undefined? <div className="divCheckout">
                    <h2>Thank you for shopping with us {username.user} !</h2>
                    <p>Your order number is {orderId} has been correctly processed on {order.date}</p>
                    <div>
                        <p>Order details:</p>
                        <ul>
                            {itemList.map((item)=>(
                                    <li key={item.title}>{item.title} x {item.quantity}  </li>
                            ))}
                        </ul>
                        
                        <p className="totalPrice">Total Price: ${order.total}</p>
                    </div>
                </div> : <div className="row bounce"><BounceLoader color="#ff0099" size={150}/></div>}
                
            </div>
        </div>
    )
}