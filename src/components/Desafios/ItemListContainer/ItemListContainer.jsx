import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ()=>{

    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'marveltoys');
        if (categoriaId) {
            const queryFillter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFillter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))));
            
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))));
        }
        
    }, [categoriaId]); 
    return(
        <div className="item-list-container">
            <h1 style={{width:"100%", color: "white"}}>Productos</h1>
            <ItemList data={data}/>
        </div>
    )
}