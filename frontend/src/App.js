import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Product_Filter from './components/Product_Filter';
import CheckOut from './components/CheckOut';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Product_Filter} />
            <Route path="/checkout" exact component={CheckOut}/>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
