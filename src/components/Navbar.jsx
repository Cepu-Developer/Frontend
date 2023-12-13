/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import Login from './Login And Register/Login';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeBackgroundColor = useCallback(() => {
    setChangeColor(window.scrollY > 10);
  }, []);

  const refreshToken = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        const headers = {
          Authorization: `Bearer ${storedToken}`,
        };

        const response = await axios.get("http://localhost:5000/token", { headers });

        // Proses respons dan set state seperti yang Anda lakukan sebelumnya
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        console.log(decoded);
        const { name } = decoded;
        setName(name);
        setExpire(decoded.exp);
      }
    } catch (error) {
      console.log(error); // Tambahkan ini untuk melihat detail kesalahan
      if (error.response) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      refreshToken();
    }

    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [refreshToken, changeBackgroundColor]);

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      localStorage.removeItem("token"); // Hapus token dari local storage
      setToken("");
      setName(""); // Atur state nama pengguna menjadi kosong
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.accessToken);
      refreshToken();
      setShowLoginModal(false);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active fixed-top" : ""} style={{ backgroundColor: "white", borderBottom: "2px solid #e0e0e0" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="./src/assets/img/Logo/logo-text-green.png" width="100%" height="50px" className="d-inline-block align-top" alt="Cek Udara" />
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
              {token ? (
                <button onClick={logout} className="btn btn-success">
                  Hi {name} <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              ) : (
                <React.Fragment>
                  <button className="btn btn-success" onClick={handleLoginClick}>
                    Masuk
                  </button>
                  <Link to="/Register" className="btn btn-outline-success">
                    Daftar
                  </Link>
                </React.Fragment>
              )}
              {token}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="lg">
        <Modal.Body>
          <div className="login-container" style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
            <div className="px-5">
              <div className="text-center">
                <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
                <h2 className="py-2">Selamat Datang</h2>
              </div>

              <form onSubmit={handleLogin} method="" action="">
                <p className="has-text-centered">{msg}</p>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Alamat Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Kata Sandi"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                <div className="text-end">
                  <button type="submit" style={{ width: "20%" }} className="btn btn-success fw-bold" onClick={handleLogin}>
                    Masuk
                  </button>
                </div>
              </form>

              <p className="mt-3 text-center">
                Tidak punya akun?{" "}
                <Link className="text-success text-decoration-none fw-bold" to="/Register">
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
