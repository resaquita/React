

import "./Item.css"

import { Link } from "react-router-dom"

import React from "react"

export const Item = ({title, pictureUrl, price, id}) => {
    return (
        <div className="card">
            <h2 className="itemTitle">{title}</h2>
            <img className="cardImg" alt="lala" src={pictureUrl}></img>
            <h3>Price: ${price}</h3>
            <div>
                <Link className="btn btn-info" to={`/item/${id}`}>View Asset</Link>
            </div>
        </div>
    
    )
}