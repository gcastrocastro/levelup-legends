import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='container'>
            <div className='mt-5 p-5 bg-light'>
                <h1 className='display-4'>Welcome to LevelUp Legends</h1>
                <p className='lead'>
                    This is a videogame search application with session authentication, built with React and Django.
                </p>
                <hr className='my-4' />
                <p>Click the button below to log in.</p>
                <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
            </div>
        </div>
    )
}