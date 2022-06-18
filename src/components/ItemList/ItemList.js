
import React from "react"

import "./ItemList.css"

import { ItemListContainer } from "../ItemListContainer/ItemListContainer"

   

export const ItemList = () => {
    return (
    <div className ="container">
        <div className="row justify-content-center">
            <ItemListContainer />
        </div>
    </div>
    )
}



