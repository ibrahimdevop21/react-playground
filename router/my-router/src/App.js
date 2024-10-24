import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './Contact';
import Current from './Current';
import Weekends from './Weekends';
import WorkDays from './WorkDays';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>
          Homepage
        </Link>
        <br />
        <Link to='/about-me' className='nav-item'>
          About Me
        </Link>
        <br />
        <Link to='/contact' className='nav-item'>
          Contact us
        </Link>
        <br />
        <Link to='/current' className='nav-item'>
          Current
        </Link>
        <br />
        <Link to='/week-ends' className='nav-item'>
          Weekends
        </Link>
        <br />
        <Link to='/work-days' className='nav-item'>
          Work days
        </Link>
      </nav>
      <Routes className='App'>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/current' element={<Current />} />
        <Route path='/week-ends' element={<Weekends />} />
        <Route path='/work-days' element={<WorkDays />} />
      </Routes>
    </div>
  );
}

export default App;
