import './App.css';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import Tacos from './Pages/Tacos';
import Details from './Pages/Details';
import NavLink from './components/NavLink';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Probando React Router Dom en una taqueria</h1>
      <nav>
        <ul className='ulNav'>


        <NavLink to="/"><li className='liNav'>Home</li></NavLink>

        <NavLink to="/eligetutaco"><li className='liNav'>Tacos</li></NavLink>


        </ul>
      </nav>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/eligetutaco' element={<SearchPage/>}/>
          
          <Route path='/tacos/:name' element={<Tacos/>}>
            <Route path='details' element={<Details/>}/>
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
