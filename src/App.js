import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// page components


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/create'>
              <Create />
              </Route>
             <Route path='/search'>
             <Search />
             </Route>
             <Route path='/recipe/:id'>
              <Recipe />
             </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
