import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/topgames"> Top Games </Link>
            <Link to="/search"> Search </Link>
        </nav>
    )
}