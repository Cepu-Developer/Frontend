// import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import Layanan from "./pages/Layanan";
// import Diskusi from "./pages/Diskusi";
// import TentangKami from "./pages/TentangKami";
// import Login from "./components/Login And Register/Login";

function App() {

  return (
    <div style={{
      background: '#fcfafa', minHeight: '100vh'
    }}>
      <NavbarComponent />

      <HomePage />

      <Footer />
    </ div>
  )
}

export default App
