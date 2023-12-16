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
      await axios.post("https://api.cek-udara.my.id/register", {
        name,
        email,
        password,
        confPassword,
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
            <img src="/logo-text-green.png" alt="Logo" height="80" />
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

                <form onSubmit={handleRegister} method="" action="">
                  <p className="has-text-centered">{msg}</p>
                  {["Nama", "Alamat Email", "Kata Sandi", "Ulangi Kata Sandi"].map((label, index) => (
                    <div key={index} className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">{index === 0 ? <i className="fa-regular fa-user"></i> : index === 1 ? <i className="fa-regular fa-envelope"></i> : <i className="fa-solid fa-key"></i>}</span>
                        <input
                          type={index > 1 ? "password" : "text"}
                          className="form-control"
                          id={`input${label.split(" ").join("")}`}
                          placeholder={label}
                          value={index === 0 ? name : index === 1 ? email : index === 2 ? password : confPassword}
                          onChange={(e) => (index === 0 ? setName(e.target.value) : index === 1 ? setEmail(e.target.value) : index === 2 ? setPassword(e.target.value) : setConfPassword(e.target.value))}
                          required
                          onFocus={() => (index === 0 ? setNamaFocus(true) : index === 1 ? setEmailFocus(true) : setPasswordFocus(true))}
                          onBlur={() => (index === 0 ? setNamaFocus(false) : index === 1 ? setEmailFocus(false) : setPasswordFocus(false))}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="text-end">
                    <button type="submit" style={{ width: "20%" }} className="button btn btn-success fw-bold">
                      Daftar
                    </button>
                  </div>

                  <p className="mt-3 text-center">
                    Sudah punya akun?{" "}
                    <Link className="text-success text-decoration-none fw-bold" to="/login">
                      Masuk
                    </Link>
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
