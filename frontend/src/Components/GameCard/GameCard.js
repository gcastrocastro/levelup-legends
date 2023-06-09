import {Link} from 'react-router-dom';
import {useState} from 'react';
import './GameCard.css';

export default function GameCard({game}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
    return (
        <Link 
        to={`/game/${game.name}`} 
        state={{game: game}} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <div className="game-card">
                {hovered && game.clip && game.clip.clip ? (
                  <video autoPlay muted loop>
                    <source src={game.clip.clip} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                ) : (
                  <img src={game.background_image} alt={game.name} />
                )}
                <h3>{game.name}</h3>
            </div>
        </Link>
    )
}