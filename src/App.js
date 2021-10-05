import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Footer from "./components/footer";
import BuyCover from "./pages/buy-cover";
import Individual from "./pages/plans/individual";
import Corporate from "./pages/plans/corporate";
import SME from "./pages/plans/sme";
import RenewCover from "./pages/plans/renew-cover";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/buy-cover">
              <BuyCover></BuyCover>
            </Route>
            <Route path="/buy-cover/individual">
              <Individual></Individual>
            </Route>
            <Route path="/buy-cover/corporate">
              <Corporate></Corporate>
            </Route>
            <Route path="/buy-cover/sme">
              <SME></SME>
            </Route>
            <Route path="/buy-cover/renew">
              <RenewCover></RenewCover>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>

    </Router>
  );
}

export default App;
