import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import store, { incremented, decremented } from "./store";
import Header from "./components/dump/header";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

function App() {
  setTimeout(() => {
    // Still pass action objects to `dispatch`, but they're created for us
    store.dispatch(incremented());
    // {value: 1}
    store.dispatch(incremented());
    // {value: 2}
    store.dispatch(decremented());
    // {value: 1}
  }, 3000);
  return (
    <Router>
      <div className="App">
        <Header></Header>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default connect()(App);
