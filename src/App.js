import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import {auth} from "./Firebase";

function Homepage() {
  return(
    <>
      <Header />
      <Home />
    </>
  )
}
function CheckoutPage() {
  return(
    <>
      <Header />
      <Checkout />
    </>
  )
}
function LoginPage() {
  return(
    <>
      {/* <Header /> */}
      <Login />
    </>
  )
}

function App() {
  const [{user}, dispatch] = useStateValue();
  // Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any cleanup operation go in here
      unsubscribe();
    }
  }, [])

  console.log( "User is >>>>>",user);


  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path = "/checkout" element = {<CheckoutPage />} />
          <Route path = "/login" element = {<LoginPage />} />
          <Route path = "/" element = {<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
{/* React Router */}
{/* localhost.com */}
{/* localhost.com/checkout */}
{/* localhost.com/login */}