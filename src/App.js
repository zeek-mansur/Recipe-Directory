import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// page components


function App() {
  return (
    <div className="App">
        <BrowserRouter>
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
             <Route path='/recipe'>
              <Recipe />
             </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
