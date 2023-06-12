import {useState, useEffect} from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import './TopGamesPage.css';

export default function TopGamesPage() {
    const [topGames, setTopGames] = useState([])
    const [nextPageURL, setNextPageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const CORS = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = '4dd0a3728ea6403a84545cc73b1ad93b';

    async function fetchTopGames() {
        const response = await fetch(`${CORS}https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=${API_KEY}`);
        const apiData = await response.json();
        setTopGames(apiData.results);
        setNextPageURL(apiData.next);
    }

    const loadMore = async () => {
        if (nextPageURL && !isLoading) {
            setIsLoading(true);
            const response = await fetch(nextPageURL);
            const apiData = await response.json();
            setTopGames((prevResults) => [...prevResults, ...apiData.results]);
            setNextPageURL(apiData.next);
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            loadMore();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nextPageURL, isLoading]);

    useEffect(() => {
        fetchTopGames()
    },[]);

    return (
        <div className='topgames-container'>
            {topGames.map(game => {
                return <GameCard game={game} key={game.name}/>
            })}
            {isLoading && <h2>Loading...</h2>}
        </div>
    )
}