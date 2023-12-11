import { Row } from "react-bootstrap"

const Footer = () => {
  return (
    <div className="bg-success text-center p-3 text-white">
      <Row className="container">
        <div className="col-lg-8 col-12">
          <Row className="text-center text-lg-start">
            <div className="col-lg-4 col-12">
              <img src="./src/assets/img/Logo/logo-text-putih.png" alt="Logo" height="80" />
            </div>
            <div className="col-lg-8 col-12 my-auto py-3 d-none d-lg-block" style={{ borderLeft: '1px white solid' }}>&copy; 2023 Udarakita. Hak Cipta dilindungi undang-undang</div>

            <div className="col-lg-8 col-12 my-auto py-3 d-lg-none d-block">&copy; 2023 Udarakita. Hak Cipta dilindungi undang-undang</div>
          </Row>
        </div>
        <div className="col-lg-4 col-12 mt-3 mt-lg-0 my-auto">
          <Row className="text-end">
            <div className="col-lg-12 col-4">
              <Row className="justify-content-lg-end">
                <div className="col-1"><i className="fa-brands fa-instagram"></i></div>
                <div className="col-1"><i className="fa-brands fa-github"></i></div>
                <div className="col-1"><i className="fa-brands fa-dribbble"></i></div>
                <div className="col-1"><i className="fa-brands fa-youtube"></i></div>
              </Row>
            </div>
            <div className="col-lg-12 col-8 p-0"> <u>Tim Pengembangan Aplikasi</u></div>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default Footer