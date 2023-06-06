import {Link} from 'react-router-dom';
import './GameCard.css';

export default function GameCard({game}) {
    return (
        <Link to={`/game/${game.name}`}>
            <div className="game-card">
                <img src={game.background_image} alt={game.name}/>
                <h2>{game.name}</h2>
                <p>{game.description}</p>
            </div>
        </Link>
    )
}