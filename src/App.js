import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/NavBar/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*Routes*/
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      < Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        </Switch>
        <ItemListContainer/>
        
    </Router>
  );
}

export default App;
