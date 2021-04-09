import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <MainPage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
