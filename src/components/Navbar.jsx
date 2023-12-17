/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const changeBackgroundColor = useCallback(() => {
    setChangeColor(window.scrollY > 10);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    window.addEventListener("scroll", changeBackgroundColor);

    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken);
      setIsLoggedIn(true);
    }

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [changeBackgroundColor]);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get("https://api.cek-udara.my.id/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLoginButtonClick = () => {
    setShowLoginModal(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.cek-udara.my.id/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const newToken = data.token;

        localStorage.setItem("token", newToken);
        setToken(newToken);
        setIsLoggedIn(true);
        setShowLoginModal(false);
        fetchUserData(newToken);
      } else {
        setMsg("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setMsg("An error occurred during authentication.");
    }
  };

  const handleLogoutClick = () => {
    setToken("");
    localStorage.removeItem("token");
    setName("");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active fixed-top" : ""} style={{ backgroundColor: "white", borderBottom: "2px solid #e0e0e0" }}>
        <Container>
          <Navbar.Brand href="/">
            <img src="/logo-text-green.png" width="100%" height="50px" className="d-inline-block align-top" alt="Cek Udara" />
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
              {isLoggedIn ? (
                <button onClick={handleLogoutClick} className="btn btn-success">
                  Logout {name && <span>{name}</span>} <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              ) : (
                <React.Fragment>
                  <button className="btn btn-success" onClick={handleLoginButtonClick}>
                    Masuk
                  </button>
                  <Link to="/Register" className="btn btn-outline-success">
                    Daftar
                  </Link>
                </React.Fragment>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="lg">
        <Modal.Body>
          <div className="login-container" style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
            <div className="px-5">
              <div className="text-center">
                <img src="/logo-text-green.png" alt="Logo" height="80" />
                <h2 className="py-2">Selamat Datang</h2>
              </div>
              <form onSubmit={handleLogin} method="" action="">
                <p className="has-text-centered">{msg}</p>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Kata Sandi" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
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
