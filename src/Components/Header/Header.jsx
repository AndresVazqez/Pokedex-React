import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header () {

    return (
        <div className="c-header">
              <nav className="c-header__nav">
                <div className="c-header__nav--img">
                    <NavLink to='/'><img  src='https://i.ibb.co/gDJGk7t/pokeapi-256.png' alt='pokeLogo'/></NavLink>                  
                </div>               
                <ul className="c-header__nav--a">
                    <li><NavLink className="c-header__nav--a-li" to="/">Home</NavLink></li>                   
                </ul>                
            </nav>                        
        </div>
    )
}