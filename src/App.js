import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import DartsPlayersPage from './DartsPlayersPage';
import DartsPlayerSinglePage from './DartsPlayerSinglePage';
import NewDartsPlayerPage from './NewDartsPlayerPage';
import DartsPlayersUpdatePage from './DartsPlayersUpdatePage';
import DartsPlayerDeletePage from './DartsPlayerDeletePage';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className='collapse navbar-collapse'>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink to={`/`} className="nav-link">
                <span className='navbar-link'>Darts Players</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to={`/new-darts`} className="nav-link">
                <span className='navbar-link'>New Darts Player</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<DartsPlayersPage />} />
        <Route path="/darts/:id" element={<DartsPlayerSinglePage />} />
        <Route path="/new-darts" element={<NewDartsPlayerPage />} />
        <Route path='/update-darts/:id' element={ <DartsPlayersUpdatePage/> }/>
        <Route path='/delete-darts/:id' element={ <DartsPlayerDeletePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
