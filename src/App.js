// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ShowList} />
          <Route path="/show/:id" component={ShowDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
