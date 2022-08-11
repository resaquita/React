import { createContext, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

      const cartUpdate = (item) => {
        const duplicate = cart.some(e=>e.id===item.id)
       

        if(duplicate){
            const cartQ = cart.find(q=>{
                return q.id === item.id
            })
            const q = cartQ.count + item.count
            if(q<=item.stock){
                quantityUpdate(item.id, q)
            } else {
                quantityUpdate(item.id, item.stock)
                toast.error("Not enough stock!")
            }
            
            }else{
            setCart([...cart, item]);
        }
    }


    
    const quantityUpdate = (id, newQuantity) =>{
        const cartCopy = [...cart];

        const newCart = cartCopy.map((item)=>{
            if(id === item.id) {
                return {...item, count:newQuantity}
            } else{
                return item
            }
        })
        setCart(newCart)
    }

    const [user, setUser] = useState({});
    const loginUpdate = (props) => {
        setUser(props)
    }

    const removeAll = () =>{
        return setCart([])
    }

    const removeItem = (title) =>{
        let cart2 = cart.filter(t=>t.title!==title)
        return (
            setCart([...cart2])
            )
    }

    return <CartContext.Provider value={{cart, cartUpdate, quantityUpdate, removeAll, removeItem,user,loginUpdate}}>
        {children}
    </CartContext.Provider>
}
    
