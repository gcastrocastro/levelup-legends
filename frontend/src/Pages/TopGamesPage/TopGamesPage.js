import {useState, useEffect} from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import './TopGamesPage.css';

export default function TopGamesPage() {
    const [topGames, setTopGames] = useState([])
    const [nextPageURL, setNextPageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchTopGames() {
        const response = await fetch(`https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af`);
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
            {isLoading && <p>Loading...</p>}
        </div>
    )
}