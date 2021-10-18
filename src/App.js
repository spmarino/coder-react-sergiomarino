import './App.css';
import Nav from './Components/NavBar/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


/*Routes*/
import Home from './pages/Home';
import Categories from './pages/Categories';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCategory from './Components/ItemCategory/ItemCategory'

function App() {
  return (
    <Router>
      < Nav />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/categories" exact component={Categories} />

        <Route path="/item/:id" exact component={ItemDetailContainer} />

        <Route path="/category/:id" exact component={ItemCategory} />
      </Switch>
        
   
        
    </Router>
  );
}

export default App;
