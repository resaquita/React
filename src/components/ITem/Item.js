

import "./Item.css"

import { ItemCount } from "../ItemCount/ItemCount"

import { Link } from "react-router-dom"

import React from "react"

export const Item = ({title, pictureUrl, price, id}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img className="cardImg" alt="lala" src={pictureUrl}></img>
            <h3>Price: ${price}</h3>
            <div>
            <ItemCount />
            <Link className="btn btn-info" to={`/item/${id}`}>Ver Mas</Link>
            </div>
        </div>
    
    )
}