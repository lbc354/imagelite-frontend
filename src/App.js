import './App.css';
import './styles/statics.css';
import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from './layouts/Base';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* rotas com cabeçalho e rodapé */}
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Base>

      {/* rotas sem cabeçalho e rodapé */}
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
