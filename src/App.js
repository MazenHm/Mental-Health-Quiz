import MainQuiz from "./pages/MainQuiz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/App.css";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<MainQuiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
