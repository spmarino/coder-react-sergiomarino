import './App.css';
import Nav from './Components/NavBar/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


/*Routes*/
import Home from './pages/Home';
import About from './pages/About';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      < Nav />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/about" exact component={About} />

        <Route path="/character/:id" exact component={ItemDetailContainer} />
      </Switch>
        
   
        
    </Router>
  );
}

export default App;
