import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}

export default App;
