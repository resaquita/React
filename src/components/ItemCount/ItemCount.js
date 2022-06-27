import "./ItemCount.css"

import React, { useState } from "react"

export const ItemCount = ({changeCount}) => {
    const [contadorInterno, setCount] = useState(0);

    const [stock] = useState(5)

    return (
            <>
                <div className="barraContador">
                    <button onClick={(e)=>{if(contadorInterno<stock){changeCount((count) => count + 1);setCount(contadorInterno +1)}}} className="btn btnSuma">+</button>
                    <button onClick={(e)=>{if(contadorInterno>0){changeCount((count) => count - 1);setCount(contadorInterno -1)}}} className="btn btnResta">-</button>
                </div>
            </>
    )
}

