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
        </div>
    )
}