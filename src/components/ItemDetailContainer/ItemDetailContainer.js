import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { ItemD } from "../ItemD/ItemD";
import {doc, getDoc,getFirestore} from "firebase/firestore";
import { BounceLoader } from "react-spinners";

export const ItemDetailContainer = () => {
    
    const {id} = useParams()

    const [item, setItem] = useState()

    useEffect(()=>{
        const db=getFirestore();

        const itemRef = doc(db,"Productos",`${id}`);
        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()){
                setItem({id:snapshot.id, ...snapshot.data()});
            }
        })

    },[id]) 


    return (
        <section className="row section2">
            {item?  <ItemD {...item}/> : <div className="row bounce"><BounceLoader color="#ff0099" size={150}/></div>}
        </section> 
    )}
    
            
        
             
    

