import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/NavBar/Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      < Nav />
      <ItemListContainer 
      welcomeMessage = "Bienvenido"/>
    </Router>
  );
}

export default App;
