import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix'
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Player from './pages/Player'
import TvShow from './pages/TvShow'
import Movie from './pages/Movie'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/tv' element={<TvShow/>}/>
        <Route exact path='/movie' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
