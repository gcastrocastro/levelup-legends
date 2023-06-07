import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            {/* <Link exact to='/'> Level Up Legends</Link> */}
            <NavLink to="/"> Level Up Legends </NavLink>
            {/* { isAuthenticated ?  */}
                <>
                    <NavLink to="/topgames"> Top Games </NavLink>
                    <NavLink to="/search"> Search </NavLink>
                </>
                {/* : */}
                <>
                    <NavLink to="/register"> Register </NavLink>
                    <NavLink to="/login"> Login </NavLink>
                </>
            {/* } */}
        </nav>
    )
}