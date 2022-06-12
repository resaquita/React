import "./ItemListContainer.css"

import React from "react"
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
    const {nombreUsuario} = props;
    const nombreTxt = `${nombreUsuario}`
    return <>
    <container className ="container">
        <div className="row justify-content-center">
            <PropsGreeting name ={nombreTxt} />
            <ItemCount />
        </div>
        </container>
        </>
}

const PropsGreeting = (props) => {
    const { name } = props;
    return (
        <div className="col-lg-10">
            <h1>Hola {name}!</h1>
        </div>
    )
}