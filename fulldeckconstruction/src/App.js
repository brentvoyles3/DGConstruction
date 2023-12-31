import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Footer from "./components/Footer"

function App() {
  return (
    <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
        <Navbar />
            <Routes>
                {/* This route is for home component 
      with exact path "/", in component props 
      we passes the imported component*/}
     <Route
                      exact path="/"
                      element={<Home />}
                  />
                  {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
                  {/* <Redirect to="/" /> */}
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
              <Footer />
          </Router>
      </>
  );
}

export default App;

