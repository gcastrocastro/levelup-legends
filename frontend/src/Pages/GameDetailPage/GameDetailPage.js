import { useLocation } from 'react-router-dom';
import './GameDetailPage.css';

export default function GameDetailPage() {
    const location = useLocation();
    const game = location.state.game

    console.log(game);

    return (
        <div className="detailpage-container">
            <div className="images">
                <img className="header-image"src={game.background_image} alt={game.name}/>
                <div className="screenshots">
                    {game.short_screenshots.slice(1).map(ss => 
                        <img src={`${ss.image}`}/>
                    )}
                </div>
            </div>

            <h2>{game.name}</h2>
        </div>
    )
}