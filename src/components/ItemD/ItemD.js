

import "./ItemD.css"

import { ItemCount } from "../ItemCount/ItemCount"

import React from "react"

export const ItemD = ({title, pictureUrl, price, description,id}) => {
    
    return (
    <section className="row">
        <div className="card col-lg-4">
            <img className="cardImg" alt="lala" src={pictureUrl}></img>
            <h3>${price}</h3>
            <ItemCount />
        </div>
        <div className="col-lg-4 pDescription">
            <h3>{title}</h3>
            <p >{description}</p>
        </div>
    </section>
    )
}