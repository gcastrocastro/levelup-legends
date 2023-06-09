import {useNavigate, NavLink} from 'react-router-dom';
import './NavBar.css';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

function NavBar({isAuthenticated, logout, username}) {
    const navigate = useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    }

    return (
        <nav>
            <NavLink to="/"><img src="https://i.imgur.com/2jhQznM.png"/></NavLink>
            { isAuthenticated ? 
                <>
                    <h3> Welcome, {username} </h3>
                    <NavLink to="/topgames"> Top Games </NavLink>
                    <NavLink to="/search"> Search </NavLink>
                    <a onClick={handleLogout} href='#!'>Logout</a>
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
    isAuthenticated: state.auth.isAuthenticated,
    username: state.profile.username
});

export default connect(mapStateToProps, { logout })(NavBar);