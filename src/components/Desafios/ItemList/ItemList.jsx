import { Item } from "../Item/Item"
import './ItemList.css';

export const ItemList = ({items})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}></div>
            {
                items.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}