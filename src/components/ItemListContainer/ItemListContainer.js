import "./ItemListContainer.css"

import React from "react"

export const ItemListContainer = () => {
    return <container className ="container">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <h2>Item List</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    </container>
}