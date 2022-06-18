import "./ItemListContainer.css"

import React, {useEffect, useState} from "react"
import { Item } from "../ITem/Item";


export const ItemListContainer = () => {
    const myPromise = new Promise((resolve,reject) => {
        const itemStock = [
            {id: 1, title: "Musica de aventuras", description: "Musica para transiciones de estilo medieval", price: "100", pictureUrl: "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/video_game_music_013120%20copy.jpg"},
            {id: 2, title: "Musica de pelea", description: "Musica para juegos de pelea", price: "120", pictureUrl: "http://i1.wp.com/www.gaming-age.com/wp-content/uploads/2015/01/Toukiden-Kiwami_Battle_Chthonian-Fiend_00.jpg"},
            {id: 3, title: "Musica epica", description: "Musica para escenas epicas", price: "110", pictureUrl: "https://www.denofgeek.com/wp-content/uploads/2022/02/LoTR-Rings-of-Power-trailer-screengrab.jpg?fit=1200%2C675"},
            {id: 4, title: "Musica para meditar", description: "Musica de relajacion", price: "50", pictureUrl: "data:image/jpeg;base64,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"}
        ] 

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

     return (
    <div className="row rowItemList">
        {items?.length <= 0? <h1>loading...</h1> : items.map((item) => (
             <Item key={item.id} {...item}/>
             
         ))}
        
     </div>
     )
    
}

