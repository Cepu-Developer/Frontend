import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

function Layanan() {
  return (
    <div style={{
      background: '#fcfafa', minHeight: '100vh'
    }}>
      <NavbarComponent />
      <div className="container">
        <img className="rounded mx-auto d-block m-4" src="./icons/icons8-padlock-1041.svg" alt="" />
        <div className="text-center rounded mx-auto d-block col-md-6">
          <div className="card-body"></div>
          <h5>Ups Kamu belum diajak!</h5>
          <p>Jangan malu buat hubungi kami untuk mendapatkan akun premium dan jelajahi semua fitur sesuka hati bebas iklan</p>
        </div>
        <div className="card rounded mx-auto d-block col-md-6">
          <div className="card-body text-center">
            <h6>Layanan Kesehatan</h6>
            <p>Fitur ini memungkinkan kamu untuk terhubung dengan fasilitas kesehatan terpercaya untuk membantu kamu menyelesaikan masalah kesehatan</p>
          </div>
        </div>
        <div className="card rounded mx-auto d-block mt-4 col-md-6">
          <div className="card-body">
            <h6>Benefit Langganan</h6>
            <ol className="list-group mb-2">
              <li className="list-group-item">Akses penuh seluruh fitur di layanan kesehatan</li>
              <li className="list-group-item">Menikmati update seluruh fitur udarakita.</li>
              <li className="list-group-item">Akses penuh aplikasi bebas iklan.</li>
            </ol>
            <button className="btn btn-success">
              Langganan Sekarang
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layanan