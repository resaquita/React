import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

      const cartUpdate = (item) => {
        const id = cart.length + 1
        const newItem = {...item, id};
        setCart([...cart, newItem]);

      }

    const quantityUpdate = (title, newQuantity) =>{
        const cartCopy = [...cart];

        const newCart = cartCopy.map((item)=>{
            if(title === item.title) {
                return {...item, quantity:newQuantity}
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

    const [count,setCount] = useState()

    useEffect(()=>{
        const cartCount = cart.reduce((partialSum, item) => partialSum + item.quantity, 0)
        setCount(cartCount)
    },[cart])

    const removeAll = () =>{
        return setCart([])
    }

    const removeItem = (title) =>{
        return (cart.splice(cart.findIndex(i => i.title === title), 1),
            setCart([...cart]))
    }

    return <CartContext.Provider value={{cart, cartUpdate, count, quantityUpdate, removeAll, removeItem,user,loginUpdate}}>
        {children}
    </CartContext.Provider>
}
    
