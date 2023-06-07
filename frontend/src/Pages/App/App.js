import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../Components/NavBar/NavBar';
import TopGamesPage from '../TopGamesPage/TopGamesPage';
import SearchBar from '../../Components/SearchBar/SearchBar';
import GameDetailPage from '../GameDetailPage/GameDetailPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/topgames" element={<TopGamesPage/>} />
        <Route path="/search" element={<SearchBar/>} />
        <Route path="/game/:name" element={<GameDetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
