/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from 'react';

const Login = ({ setLoginData, handleLogin }) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <Row className="m-0">
                <Col>
                    <div>
                        <div className="login-container" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}> {/* Tambahkan padding ke login-container */}

                            <Link to='/' className='text-success text-decoration-none'><span className="me-2"><i className="fa-solid fa-arrow-left"></i></span>Kembali</Link>
                            <div className="justify-content-center">
                                <div className="text-center">
                                    <img src="./src/assets/img/Logo/logo-text-green.png" alt="Logo" height="80" />
                                    <h2 className="mt-2">Selamat Datang</h2>
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
                                        type="submit"
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
                    </div>
                </Col>

                <Col className="bg-white min-vh-100 d-flex">
                    <div className="text-center p-5" style={{ marginTop: '25%' }}>
                        <br />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique quibusdam vel asperiores sit. Neque blanditiis doloremque atque voluptatibus architecto, itaque, aliquid, esse deserunt dignissimos eum consequuntur harum a possimus.</span>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Login