import { useLocation } from 'react-router-dom';
import './GameDetailPage.css';
import Carousel from '../../Components/Carousel/Carousel';
import { useState, useEffect } from 'react';

export default function GameDetailPage() {
    const [gameObject, setGameObject] = useState({});
    const location = useLocation();
    const game = location.state.game

    const getGameById = async () => {
        const response = await fetch(`https://rawg.io/api/search?search=${game.id}&page_size=20&page=1&?key=c542e67aec3a4340908f9de9e86038af`)
        const data = await response.json()
        console.log('data', data)
        setGameObject(data)
        console.log(gameObject)
    }

    useEffect(()=>{
        getGameById()
    }, []);

    return (
        <div className="detailpage-container">
            <div className="images">
                <Carousel game={game}/>
            </div>
            <h2>{game.name}</h2>
            <div className="game-details">
                <div className="game-description">
                    <h6>{gameObject.description_raw}</h6>
                </div>
                <div className="details">
                    <h3>Genres</h3>
                    <ul>
                        {game.genres.map(genre => (
                            <li>{genre.name}</li>
                        ))}
                    </ul>
                    <h3>Rating</h3>
                    <h6>{game.rating}/5</h6>
                    <h3>Platforms</h3>
                    {game.platforms.map(platform => (
                            <h6>{platform.platform.name} ({platform.released_at}) </h6>
                        ))}
                </div>
            </div>
        </div>
    )
}