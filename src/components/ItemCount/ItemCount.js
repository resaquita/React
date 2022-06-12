import "./ItemCount.css"

import React, { useState } from "react"

export const ItemCount = () => {
    const [count, setCount] = useState(0);

    const [stock] = useState(5)

    const resta = () => {
     return count > 0 && setCount(count - 1)
    }

    const suma = () => {
      return count < stock && setCount(count + 1)
    }
    return (
    <div className="row rowItemCount">
        <div className="card">
            <h3>Musica</h3>
            <div className="barraContador col-lg-8">
                <button onClick={(e)=>suma()} className="btn btnSuma">+</button>
                <h4>{count}</h4>
                <button onClick={(e)=>resta()} className="btn btnResta">-</button>
            </div>
            <button onClick={(e)=>suma()} className="btn btnAgregar btn-primary">Add Item</button>
        </div>
    </div>
    )
}