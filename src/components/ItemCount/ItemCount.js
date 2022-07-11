import "./ItemCount.css"

import React, { useState } from "react"

export const ItemCount = ({changeCount, stockCount}) => {
    const [contadorInterno, setCount] = useState(0);
    
    const [stock2] = useState(stockCount)

    return (
            <>
                <div className="barraContador">
                    <button onClick={(e)=>{if(contadorInterno<stock2){changeCount((count) => count + 1);setCount(contadorInterno +1)}}} className="btn btnSuma">+</button>
                    <button onClick={(e)=>{if(contadorInterno>0){changeCount((count) => count - 1);setCount(contadorInterno -1)}}} className="btn btnResta">-</button>
                </div>
            </>
    )
}

