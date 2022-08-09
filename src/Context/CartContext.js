import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

      const cartUpdate = (item) => {
        const newItem = {...item};
        setCart([...cart, newItem]);

      }

    const quantityUpdate = (id, newQuantity) =>{
        const cartCopy = [...cart];

        const newCart = cartCopy.map((item)=>{
            if(id === item.id) {
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
    
