import { useLocation } from 'react-router-dom';
import './GameDetailPage.css';
import Carousel from '../../Components/Carousel/Carousel';

export default function GameDetailPage() {
    const location = useLocation();
    const game = location.state.game
    console.log(game);

    return (
        <div className="detailpage-container">
            <div className="images">
                <Carousel game={game}/>
            </div>
            <h2>{game.name}</h2>
            <div className="game-details">
                    <h3>Genres</h3>
                    <ul>
                        {game.genres.map(genre => (
                            <li>{genre.name}</li>
                        ))}
                    </ul>
                    <h3>Rating</h3>
                    <h4>{game.rating}/5</h4>
                    <h3>Platforms</h3>
                    {game.platforms.map(platform => (
                            <h6>{platform.platform.name} ({platform.released_at}) </h6>
                        ))}
            </div>
        </div>
    )
}