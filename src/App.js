import './App.css';
import Layout from './component/Layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
