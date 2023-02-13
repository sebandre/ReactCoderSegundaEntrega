import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import marvel_logo from '../../../assets/marvel_logo.jpg';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={marvel_logo} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Home</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/funko_pop">Funko Pop</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/action_figures">Action Figures</NavLink>
                       <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/clothes">Clothes</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
