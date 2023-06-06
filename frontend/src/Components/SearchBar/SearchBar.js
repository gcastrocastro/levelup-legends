import {useState} from 'react';
import GameCard from '../GameCard/GameCard';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [gameResults, setGameResults] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let searchName = searchTerm.split(' ').join('-').toLowerCase();
        const response = await fetch(`https://api.rawg.io/api/games?key=4dd0a3728ea6403a84545cc73b1ad93b&search=${searchName}`);
        const apiData = await response.json();
        setGameResults(apiData.results);
        console.log(gameResults)
    }

    const errorMessage = 'No Game Found';

    return (
        <>
            <div className="search">
                <form onSubmit={onSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange}/>
                    <input type="submit" />
                </form>
            </div>
            { gameResults ?
                gameResults.map((game) => (
                    <GameCard game={game} key={game.id}/>
                ))
                :
                <p>{errorMessage}</p>
            }
        </>
    )
}