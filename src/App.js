import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Components/Login/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./Components/Firebase/Firebase";
import Widg from "./Components/Widg/Widg";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <div className="app__body">
            <Route exact path="/">
              <Sidebar />
              <Feed />
              <Widg />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
