import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home'

function App() {
  return (
    <Router>
        <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
