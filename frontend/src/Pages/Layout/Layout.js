import Navbar from '../../Components/NavBar/NavBar';
import {useEffect} from 'react'
import { connect } from 'react-redux';
import { load_user, checkAuthenticated } from '../../actions/auth';

const Layout = ({ children, checkAuthenticated, load_user }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);