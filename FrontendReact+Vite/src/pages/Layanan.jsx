import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

function Layanan() {
  return (
    <div style={{
      background: '#fcfafa', minHeight: '100vh'
    }}>
      <NavbarComponent />
      <div className="min-vh-100">
        Layanan Kesehatan
      </div>
      <Footer />
    </div>
  )
}

export default Layanan