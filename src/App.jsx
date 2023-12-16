import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

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
