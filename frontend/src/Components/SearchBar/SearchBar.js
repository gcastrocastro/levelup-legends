import {useState, useEffect} from 'react';
import GameCard from '../GameCard/GameCard';
import './SearchBar.css';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [gameResults, setGameResults] = useState([])
    const [nextPageURL, setNextPageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let searchName = searchTerm.split(' ').join('-').toLowerCase();
        const response = await fetch(`https://api.rawg.io/api/games?key=4c542e67aec3a4340908f9de9e86038af&search=${searchName}`);
        const apiData = await response.json();
        setGameResults(apiData.results);
        setNextPageURL(apiData.next);
        setSearchTerm('')
    }

    const loadMore = async () => {
        if (nextPageURL && !isLoading) {
            setIsLoading(true);
            const response = await fetch(nextPageURL);
            const apiData = await response.json();
            setGameResults((prevResults) => [...prevResults, ...apiData.results]);
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

    return (
        <div className="search-container">
            <div className="search">
                <form onSubmit={onSubmit}>
                    <input className="input-search" type="text" placeholder="Search for a game!" value={searchTerm} onChange={handleChange}/>
                    <input type="submit" />
                </form>
            </div>
            <div className="gamecard-container">
                { gameResults.length > 0?
                    <>
                        {gameResults.map((game) => (
                            <GameCard game={game} key={game.id}/>
                        ))}
                        {isLoading && <h2>Loading...</h2>}
                    </>
                    :
                    <h2> No Games Found </h2>
                }
            </div>
        </div>
    )
}