

import "./Item.css"

import { ItemCount } from "../ItemCount/ItemCount"

import React from "react"

export const Item = ({title, pictureUrl, price}) => {
    return (
    
        <div className="card">
            <h2>{title}</h2>
            <img className="cardImg" alt="lala" src={pictureUrl}></img>
            <h3>{price}</h3>
            <ItemCount />
        </div>
    
    )
}