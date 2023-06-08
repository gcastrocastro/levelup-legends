import {NavLink} from 'react-router-dom';
import './NavBar.css';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

function NavBar({isAuthenticated}) {
    return (
        <nav>
            <NavLink to="/"> Level Up Legends </NavLink>
            { isAuthenticated ? 
                <>
                    <NavLink to="/topgames"> Top Games </NavLink>
                    <NavLink to="/search"> Search </NavLink>
                    <a className='nav-link'onClick={logout} href='#!' > Logout </a>
                </>
                :
                <>
                    <NavLink to="/register"> Register </NavLink>
                    <NavLink to="/login"> Login </NavLink>
                </>
            }
        </nav>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);