import "./ItemListContainer.css"

import React from "react"

export const ItemListContainer = (props) => {
    const {nombreUsuario} = props;
    const nombreTxt = `${nombreUsuario}`
    return <container className ="container">
        <div className="row justify-content-center">
            <PropsGreeting name ={nombreTxt} />
        </div>
    </container>
}

const PropsGreeting = (props) => {
    const { name } = props;
    return (
        <div className="col-lg-10">
            <h1>Hola {name} esta es tu lista de items:</h1>
            <h2>Item List:</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li> 
                 <li>Item 3</li>
            </ul>
        </div>
    )
}