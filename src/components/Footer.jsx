const Footer = () => {
  return (
    <footer className=" container bd-footer py-3 py-md-3 mt-4 border-top bg-bod-tertiary">
      <div className=" text-body-secondary row g-0 justify-cotent-center">
        <div className="col-6 col-md-4">
          <div className="row m-4">
            <div className="col">
              <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                <img className="img-fluid" src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" />
                <span className="fs-5"></span>
              </a>
              <ul className="list-unstyled small">
                <li className="mb-2">Aplikasi cek polusi udara berbasis Web yang dikembangkan oleh tim CEPU yang dibentuk tahun 2023</li>
                <li className="mb-2">&copy; 2023 Udarakita.</li>
                <li className="mb-2">V. 1.0.0</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          <div className="row m-4">
            <div className="col-4">
              <h5>Halaman</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/diskusi">Forum Diskusi</a></li>
                <li className="mb-2"><a href="/layananKesehatan">Layanan Kesehatan</a></li>
                <li className="mb-2"><a href="/tentangKami">Tentang Kami</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h5>Petunjuk</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="">Getting started</a></li>
                <li className="mb-2"><a href="">Starter template</a></li>
                <li className="mb-2"><a href="">Webpack</a></li>
                <li className="mb-2"><a href="">Parcel</a></li>
                <li className="mb-2"><a href="">Vite</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h5>Tim</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://id.linkedin.com/in/aria-putra-pratama-209482283" target="_blank" rel="noopener noreferrer">Aria Putra Pratama</a></li>
                <li className="mb-2"><a href="https://www.linkedin.com/in/gilangriyanto/" target="_blank" rel="noopener noreferrer">Gilang Riyanto</a></li>
                <li className="mb-2"><a href="https://www.linkedin.com/in/m-ariansyah" target="_blank" rel="noopener noreferrer">Muhammad Ariyansyah</a></li>
                <li className="mb-2"><a href="http://www.linkedin.com/in/dindarosalin" target="_blank" rel="noopener noreferrer">Dinda Rosalin Husna</a></li>
                <li className="mb-2"><a href="http://www.linkedin.com/in/yannriani" target="_blank" rel="noopener noreferrer">Dwi Wahyu Riani</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer