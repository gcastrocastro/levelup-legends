import {useState, useEffect} from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import './TopGamesPage.css';

export default function TopGamesPage() {
    const [topGames, setTopGames] = useState([])

    async function fetchTopGames() {
        const response = await fetch(`https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af`);
        const apiData = await response.json();
        setTopGames(apiData.results);
    }

    useEffect(() => {
        fetchTopGames()
    },[]);

    return (
        <div className='topgames-container'>
            {topGames.map(game => {
                return <GameCard game={game} key={game.name}/>
            })}
        </div>
    )
}