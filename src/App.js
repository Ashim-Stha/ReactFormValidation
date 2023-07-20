import React from "react";
import Register from "./Register";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Register />
      </main>
    </Router>
  );
}

export default App;
