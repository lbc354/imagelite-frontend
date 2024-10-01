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
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom} />

      <AuthProvider>
        <Router>
          <Routes>
            {/* rotas com cabeçalho e rodapé */}
            <Route element={<Base />}>
              {/* rotas públicas */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              {/* rotas privadas */}
              <Route exact path="/upload" element={<PrivateRoute><AddImage /></PrivateRoute>} />
            </Route>
            {/* rotas sem cabeçalho e rodapé */}
            {/* <Route exact path="/" element={<Home />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
