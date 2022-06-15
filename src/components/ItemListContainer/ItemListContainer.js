import "./ItemListContainer.css"

import React from "react"
import { ItemList } from "../ItemDetailContainer/ItemList/ItemList";

export const ItemListContainer = () => {
    return (
    <div className ="container">
        <div className="row justify-content-center">
            <ItemList />
        </div>
    </div>
    )
}

