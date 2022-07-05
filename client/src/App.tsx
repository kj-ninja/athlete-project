import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
