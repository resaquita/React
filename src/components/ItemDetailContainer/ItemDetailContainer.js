import React, {useEffect, useState} from "react"
import { ItemD } from "../ItemD/ItemD";


export const ItemDetailContainer = () => {
    
    const getItems = new Promise((resolve) => {
        const item = {id: 1, title: "Musica de aventuras", description: "Music for adventure games. The stipulated lenght of each track is two minutes. All tracks are loopable.", price: "100", pictureUrl: "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/video_game_music_013120%20copy.jpg"}
        
        setTimeout(()=>{
            resolve(item)
        },2000);
    });

    const [items, setItems] = useState({})

    useEffect(() => {
        getItems.then(items => setItems(items))
    },[])

    return (
        <>
        {items.id !== undefined && <ItemD {...items}/>}
        </>

       
        
    )}
    
            
        
             
    

