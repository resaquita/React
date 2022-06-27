import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { ItemD } from "../ItemD/ItemD";

import { itemStock } from "../ItemStock";


export const ItemDetailContainer = () => {
    
    const getItems = new Promise((resolve) => {
        const items = itemStock
        setTimeout(()=>{
            resolve(items)
        },2000);
    });

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems.then(items => setItems(items))
    },[])

    const {id} = useParams()

    let result = []

    result = items.filter( items => items.id == id);

    return (
        <section className="row section2">
            {items?.length <= 0? <h1>loading...</h1> : result.map((item) => (
                <ItemD key={item.id} {...item}/>
                ))}
        </section> 
    )}
    
            
        
             
    

