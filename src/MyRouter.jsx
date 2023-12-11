import { Routes, Route } from "react-router-dom";
import Register from "./components/Login And Register/Register";
// import App from "./App";
import NotFound from "./pages/NotFound";
import Layanan from "./pages/Layanan";
import Diskusi from "./pages/Diskusi";
import TentangKami from "./pages/TentangKami";
import Login from "./components/Login And Register/Login";
import HomePage from "./pages/HomePage";

function MyRouter() {

  return (
    <div style={{
      background: '#fcfafa', minHeight: '100vh'
    }}>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/layananKesehatan" element={<Layanan />} />
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/tentangKami" element={<TentangKami />} />
      </Routes>

    </ div>
  )
}

export default MyRouter
