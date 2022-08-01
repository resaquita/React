import "./ItemListContainer.css"

import React, {useEffect, useState} from "react"
import { Item } from "../ITem/Item";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore,query,where} from "firebase/firestore";
import { BounceLoader } from "react-spinners";

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [itemsDefault, setItemsDefault] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const cat = useParams()

    useEffect(()=>{
        setIsLoading(true)
        const db = getFirestore();
        const q = query(collection(db,"Productos"),where("cat","==", `${cat.id}`))
        getDocs(q).then((snapshot)=>{
            setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
            setIsLoading(false)
        });
    }, [cat]);

    useEffect(()=>{
        setIsLoading(true)
        const db = getFirestore();
        const itemsCollection = collection(db, "Productos");
        getDocs(itemsCollection).then((snapshot)=>{
            setItemsDefault(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
            setIsLoading(false)
        });
    }, []);

     return (
        <div className ="container">
            <div className="row rowItemList">
                {isLoading? <div className="row bounce"><BounceLoader color="#ff0099" size={150}/></div> : ((cat.id==undefined)? itemsDefault.map((item) => (
                    <Item key={item.id} {...item}/>
                )) : items.map((item) => (
                    <Item key={item.id} {...item}/>
                )))}
                
            </div>
    </div>
     )
    
}

