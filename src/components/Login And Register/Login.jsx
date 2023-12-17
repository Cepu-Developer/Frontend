/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setToken, setName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();

    // Make an API request to authenticate the user
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
        const token = data.token;

        // Store the token (you may want to use more secure methods)
        localStorage.setItem("token", token);

        // Redirect to the home page
        navigate("/");
      } else {
        setMsg("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setMsg("An error occurred during authentication.");
    }
  };

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <Row className="m-0">
        <Col>
          <div>
            <div className="login-container" style={{ padding: "40px", display: "flex", flexDirection: "column" }}>
              {" "}
              {/* Tambahkan padding ke login-container */}
              <Link to="/" className="text-success text-decoration-none">
                <span className="me-2">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                Kembali
              </Link>
              <div className="justify-content-center">
                <div className="text-center">
                  <img src="/logo-text-green.png" alt="Logo" height="80" />
                  <h2 className="mt-2">Selamat Datang</h2>
                </div>
                <form onSubmit={Auth} method="" action="">
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
                    <button type="submit" style={{ width: "20%" }} className="btn btn-success fw-bold" onClick={Auth}>
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
          </div>
        </Col>

        <Col className="bg-white min-vh-100 d-flex">
          <div className="text-center p-5" style={{ marginTop: "25%" }}>
            <img src="/logo-text-green.png" alt="Logo" height="80" />
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique quibusdam vel asperiores sit. Neque blanditiis doloremque atque voluptatibus architecto, itaque, aliquid, esse deserunt dignissimos eum consequuntur
              harum a possimus.
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
