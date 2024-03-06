import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">
      <Router>
      <nav className="nav">
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
</nav>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
</Router>
</div>
  );
}

export default App;
