/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = ({ setLoginData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [namaFocus, setNamaFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <Row className="m-0">
        <Col className="bg-white min-vh-100 d-flex">
          <div className="text-center p-5" style={{ marginTop: "25%" }}>
            <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique quibusdam vel asperiores sit. Neque blanditiis doloremque atque voluptatibus architecto, itaque, aliquid, esse deserunt dignissimos eum consequuntur
              harum a possimus.
            </span>
          </div>
        </Col>

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
                  <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
                  <h2 className="mt-2">Selamat Datang</h2>
                </div>

                <form onSubmit={handleRegister} method="" action="">
                  <p className="has-text-centered">{msg}</p>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-regular fa-user"></i>
                      </span>
                      <input type="text" className="form-control" id="nama" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required onFocus={() => setNamaFocus(true)} onBlur={() => setNamaFocus(false)} />
                    </div>
                  </div>

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

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Ulangi Kata Sandi"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        required
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button type="submit" style={{ width: "20%" }} className="button btn btn-success fw-bold">
                      Daftar
                    </button>
                  </div>

                  <p className="mt-3 text-center">
                    Sudah punya akun?{" "}
                    <a className="text-success text-decoration-none fw-bold" href="/Login">
                      Masuk
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
