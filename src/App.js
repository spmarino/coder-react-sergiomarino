import './App.css';
import Nav from './Components/NavBar/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createContext} from 'react';
import CartContextProvider from './Components/Context/CartContext';


/*Routes*/
import Home from './pages/Home';
import Categories from './pages/Categories';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCategory from './Components/ItemCategory/ItemCategory'
import Cart from './Components/Cart/Cart';





export const AppContext = createContext()

function App() {
  return (
    <CartContextProvider>
   
    <Router>
      < Nav />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/categories" exact component={Categories} />

        <Route path="/item/:id" exact component={ItemDetailContainer} />

        <Route path="/category/:id" exact component={ItemCategory} />

        <Route path="/cart" exact component={Cart} />

      

      
        
        
      </Switch>
        
   
        
    </Router>
  
    </CartContextProvider>
  );
}

export default App;
