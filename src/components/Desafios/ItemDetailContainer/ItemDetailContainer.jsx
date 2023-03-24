import React ,{ useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const [data, setData] = useState({});
    const {detalleId} = useParams();


    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'marveltoys', detalleId);
        getDoc (queryDoc)
        .then(res => setData({id: res.id, ...res.data()}));
    },[detalleId])
    return(
        <div className="item-detail-container">
            <h1 style={{width:"100%", color: "white"}}>Detalles</h1>
            <ItemDetail data={data}/>
        </div>
    );
}