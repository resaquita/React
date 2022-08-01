import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail"
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
        <div className ="container">
            <div className="section2 justify-content-center">
                {item?  <ItemDetail {...item}/> : <div className="row bounce"><BounceLoader color="#ff0099" size={150}/></div>}
            </div>
        </div>
    )}
    
            
        
             
    

