import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

function Diskusi() {
  return (
    <div style={{
      background: '#fcfafa', minHeight: '100vh'
    }}>
      <NavbarComponent />
      <div className="min-vh-100">
        Diskusi
      </div>
      <Footer />
    </div>
  )

}

export default Diskusi