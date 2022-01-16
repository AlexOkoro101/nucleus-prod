import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Footer from "./components/footer";
import BuyCover from "./pages/buy-cover";
import Individual from "./pages/plans/individual";
import Corporate from "./pages/plans/corporate";
import SME from "./pages/plans/sme";
import RenewCover from "./pages/plans/renew-cover";
import Success from "./pages/plans/shared/success";
import Failure from "./pages/plans/shared/failure";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import IndividualLoan from "./pages/plans/loan/individualLoan";

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

            {/* Functional */}
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

            <Route path="/buy-cover/individualLoan">
              <IndividualLoan></IndividualLoan>
            </Route>

            {/* Transaction */}
            <Route exact path="/payment/success">
                <Success></Success>
            </Route>
            <Route exact path="/payment/failure">
                <Failure></Failure>
            </Route>

            {/* Static Pages */}
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/privacy">
              <Privacy></Privacy>
            </Route>
            <Route exact path="/terms">
              <Terms></Terms>
            </Route>


            
          </Switch>
        </div>

        <Footer></Footer>
      </div>

    </Router>
  );
}

export default App;
