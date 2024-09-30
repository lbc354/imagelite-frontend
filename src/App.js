import './App.css';
import './styles/statics.css';
import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from './layouts/Base';
import Home from './pages/Home';
import AddImage from './pages/AddImage';
import Login from './pages/Login';
import Register from './pages/Register';

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
        <Routes>
          {/* rotas com cabeçalho e rodapé */}
          <Route element={<Base />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/upload" element={<AddImage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Route>

          {/* rotas sem cabeçalho e rodapé */}
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
