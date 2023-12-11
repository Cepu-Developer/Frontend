/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Modal } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/index';
// import Login from './Login And Register/Login';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeBackgroundColor);
    };
  }, []);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false); // Pastikan form register ditutup ketika membuka form login
  };

  const handleRegisterClick = () => {
    setShowLoginModal(false); // Pastikan form login ditutup ketika membuka form register
    setShowRegisterModal(true);
  };

  const handleLogin = () => {
    // Contoh logika penanganan login
    if (loginData.username === 'user' && loginData.password === 'password') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      console.log('Login berhasil');
    } else {
      console.log('Login gagal');
      // Tambahkan logika penanganan kasus login gagal di sini
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={changeColor ? 'color-active fixed-top' : ''}
        style={{ backgroundColor: 'white', borderBottom: '2px solid #e0e0e0' }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./src/assets/img/Logo/logo-text-green.png"
              width="100%"
              height="50px"
              className="d-inline-block align-top"
              alt="Cek Udara"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className="nav-link" activeClassName="active-link">
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="d-flex gap-2 text-center">
              <button className="btn btn-success" onClick={handleLoginClick}>
                Masuk
              </button>
              <Link to='/Register' className='btn btn-outline-success'>Daftar</Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="lg">
        <Modal.Body>
          <div className="login-container" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}> {/* Tambahkan padding ke login-container */}
            <div className="px-5">
              <div className="text-center">
                <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
                <h2 className="py-2">Selamat Datang</h2>
              </div>

              <form method="" action="">
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Alamat Email"
                      required
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Kata Sandi"
                      required
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </form>
              <div className="text-end">
                <button
                  type="button"
                  style={{ width: '20%' }}
                  className="btn btn-success fw-bold"
                  onClick={handleLogin}
                >
                  Masuk
                </button>
              </div>

              <p className="mt-3 text-center">
                Tidak punya akun? <a className='text-success text-decoration-none fw-bold' href='/Register'>Daftar</a>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;