import './App.css';
import './styles/statics.css';
import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from './layouts/Base';
import Home from './pages/Home';
import AddImage from './pages/AddImage';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom} />

      <Router>
        {/* rotas com cabeçalho e rodapé */}
        <Base>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/upload" element={<AddImage />} />
          </Routes>
        </Base>

        {/* rotas sem cabeçalho e rodapé */}
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
