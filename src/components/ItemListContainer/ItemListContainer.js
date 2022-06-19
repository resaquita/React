import "./ItemListContainer.css"

import React, {useEffect, useState} from "react"
import { Item } from "../ITem/Item";
import { itemStock } from "../ItemStock";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const myPromise = new Promise((resolve,reject) => {

        setTimeout(()=>{if (itemStock.length>0){
            resolve(itemStock)
        } else {
            reject("error")
        }},2000);
        
    });

    const [items, setItems] = useState([])
    
    useEffect(()=>{
        myPromise.then(itemStock => setItems(itemStock))
    })

    const cat = useParams()

    let result = []

    if (cat.id == undefined){
        result = items
    }else {
        result = items.filter( items => items.cat === cat.id);
    }

     return (
    <div className="row rowItemList">
        {items?.length <= 0? <h1>loading...</h1> : result.map((item) => (
             <Item key={item.id} {...item}/>
         ))}
        
     </div>
     )
    
}

