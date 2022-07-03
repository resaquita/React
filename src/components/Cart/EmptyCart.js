import React from "react"
import {Link} from "react-router-dom"

export const EmptyCart = () =>{

    return <div className="emptyCartRow">
        <div>
            <img className="emptyCartImg" alt="empty" src="https://thumbs.gfycat.com/LonelyDazzlingBoar-size_restricted.gif"></img>
        </div>
        <div className="row btnBackRow">
        <Link className="btn btn-primary btnBack" to="/">Back</Link>
        </div>
        </div>
}