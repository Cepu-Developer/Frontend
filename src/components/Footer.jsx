import { Row } from "react-bootstrap"

const Footer = () => {
  return (
    <div className="bg-success text-center p-2 text-white text-center">
      <Row className="container">
        <div className="col-lg-8 col-12">
          <Row className="text-center text-lg-start">
            <div className="col-lg-4">
              <img className="img-fluid" src="./src/assets/img/Logo/logo-text-putih.png" alt="Logo"/>
            </div>
            <div className="col-lg-8 col-12 my-auto py-3 d-none d-lg-block" style={{ borderLeft: '1px white solid' }}>&copy; 2023 Udarakita. Hak Cipta dilindungi undang-undang</div>
            <div className="col-lg-8 col-12 my-auto py-3 d-lg-none d-block">&copy; 2023 Udarakita. Hak Cipta dilindungi undang-undang</div>
          </Row>
        </div>
        <div className="col-lg-4 col-12 mt-3 mt-lg-0 my-auto">
          <Row className="text-end">
            <div className="">
              <Row className="justify-content-lg-end">
                <a href="#" className="col-1 m-2"><i className="fa-brands ifa fa-instagram fa-xl"></i></a>
                <a href="#" className="col-1 m-2"><i className="fa-brands ifa fa-github fa-xl"></i></a>
                <a href="#" className="col-1 m-2"><i className="fa-brands ifa fa-dribbble fa-xl"></i></a>
                <a href="#" className="col-1 m-2"><i className="fa-brands ifa fa-youtube fa-xl"></i></a>
              </Row>
            </div>
            <a href="http://" target="_blank" className="text-white mx-2 justify-content-end" rel="noopener noreferrer"> Tim Pengembangan Aplikasi</a>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default Footer