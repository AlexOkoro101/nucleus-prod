import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="content">
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>

    </Router>
  );
}

export default App;
