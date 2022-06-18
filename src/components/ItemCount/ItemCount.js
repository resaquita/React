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
        <div className="rowItemCountDiv">
            <div className="barraContador">
                <button onClick={(e)=>suma()} className="btn btnSuma">+</button>
                <h4>{count}</h4>
                <button onClick={(e)=>resta()} className="btn btnResta">-</button>
            </div>
            <button onClick={(e)=>suma()} className="btn btnAgregar btn-primary">Add Item</button>
            <button className="btn btn-primary">Ver mas</button>
        </div>
    </div>
    )
}