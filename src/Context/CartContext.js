import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

      const cartUpdate = (item) => {
        const id = cart.length + 1
        const newItem = {...item, id};
        setCart([...cart, newItem]);
        console.log(cart)
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

    const cartQuantity = () => {
        const amount = cart.length
        return amount
    }

    return <CartContext.Provider value={{cart, cartUpdate, cartQuantity, quantityUpdate}}>
        {children}
    </CartContext.Provider>
}

