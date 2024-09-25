import './App.css';
import './styles/statics.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from './layouts/Base';
import Home from './pages/Home';

function App() {
  return (
    <Base>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Base>
  );
}

export default App;
