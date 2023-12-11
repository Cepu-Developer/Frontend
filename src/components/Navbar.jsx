/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import * as jwt_decode from "jwt-decode";
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

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const { accessToken } = response.data;
      setToken(accessToken);
      const decoded = jwt_decode(accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  }, [navigate]);

  useEffect(() => {
    refreshToken();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [refreshToken, changeBackgroundColor]);

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        try {
          const response = await axios.get("http://localhost:5000/token");
          const { accessToken } = response.data;
          config.headers.Authorization = `Bearer ${accessToken}`;
          setToken(accessToken);
          const decoded = jwt_decode(accessToken);
          setName(decoded.name);
          setExpire(decoded.exp);
        } catch (error) {
          console.error("Error refreshing token:", error);
          if (error.response && error.response.status === 401) {
            navigate("/");
          }
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
      setShowLoginModal(false);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
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
          {/* Hide/show logout based on user authentication */}
          {token ? (
            <button onClick={logout} className="button is-light">
              Log Out
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
          {/* Show user name when logged in */}
          {token && <p>Hi {name}</p>}
        </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="lg">
        <Modal.Body>
          <div className="login-container" style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
            {" "}
            {/* Tambahkan padding ke login-container */}
            <div className="px-5">
              <div className="text-center">
                <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
                <h2 className="py-2">Selamat Datang</h2>
              </div>

              <form onSubmit={Auth} method="" action="">
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
                <a className="text-success text-decoration-none fw-bold" href="/Register">
                  Daftar
                </a>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;