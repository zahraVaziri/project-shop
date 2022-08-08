import './App.css';
import Layout from './component/Layout/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import CartProvider from './component/Provider/CartProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
      <Layout>
         <Switch>
         
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
      </CartProvider>
      </Router>
      
    </div>
  );
}

export default App;
