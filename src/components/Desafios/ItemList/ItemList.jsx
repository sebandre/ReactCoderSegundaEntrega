import { Item } from "../Item/Item"
import React from 'react';
import './ItemList.css';

export const ItemList = ({data = []})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}></div>
            {
                data.map(products => <Item key={products.id} info={products}/>)               
            }
        </div>
        
    )  
}