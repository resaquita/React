import "./ItemCount.css"

import React, { useState } from "react"

import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ItemCount = ({changeCount}) => {
    const [contadorInterno, setCount] = useState(0);

    const [stock] = useState(5)

    let navigate = useNavigate()

    return (
            <>
                <div className="barraContador">
                    <button onClick={(e)=>{if(contadorInterno<stock){changeCount((count) => count + 1);setCount(contadorInterno +1)}}} className="btn btnSuma">+</button>
                    <button onClick={(e)=>{if(contadorInterno>0){changeCount((count) => count - 1);setCount(contadorInterno -1)}}} className="btn btnResta">-</button>
                </div>
                <button onClick={(e)=>{if(contadorInterno>0){changeCount(contadorInterno); navigate("/cart")}else{toast.error("Cart is empty!")}}} className="btn btnAgregar btn-primary">Finalizar compra</button>
                <ToastContainer />
            </>
    )
}

