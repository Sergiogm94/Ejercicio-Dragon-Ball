import { Link, Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import './App.css';
import Home from "./pages/home-page/Home";
import Characters from "./pages/characters-page/Characters";
import CharacterDetail from "./pages/character-detail-page/CharacterDetail";


function App() {
  return (
    <Router>
      <header className="header">
        <NavLink className="link" activeclassname={"active"} to="/">Home</NavLink>
        <Link className="link" to="/characters">Characters</Link>
      </header>
      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/characters" element={<Characters></Characters>}/>
          <Route path="/characters/:idCharacters" element={<CharacterDetail></CharacterDetail>}/>
      </Routes>
    </Router>
  );
}

export default App;
