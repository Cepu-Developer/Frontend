import { useState } from "react";
import { Button, Form, Row, Carousel,Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "../components/container";
import { Loading } from "../components/loading";
import { useLocation } from "../components/hooks/useLocation";
import NavbarComponent from "../components/Navbar";
import CardArtikel from "../components/Homepage/CardArtikel";
import Footer from "../components/Footer";
import CardDiskusi from "../components/Homepage/CardDiskusi";
import { CardUdara } from "../components/component/card";

const HomePage = () => {
  // State untuk tombol dan data lokasi udara
  const [isClicked, setIsClicked] = useState(false);
  const { pollutan, isLoading } = useLocation(isClicked);

  return (
    <div className="homepage">
      <NavbarComponent />
      <div className="container py-lg-5 pt-0">
        <Container>
          {isLoading ? (
            <Loading isLoading />
          ) : (
            <>
              <section className="position-relative px-0 pt-14 md:px-8 bg-gradient">
                <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80">
                  <div className="position-relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-50 start-50 rotate-[30deg] bg-gradient opacity-30 sm:left-[calc(50%-30rem)]"></div>
                </div>
                <div className="container mx-auto py-5 py-md-5 py-lg-[100px] text-black">
                  <Row className={`justify-content-center align-items-center mb-5 mt-2 ${isClicked ? 'text-left' : 'text-center'}`}>
                    <Col className="mb-3 mt-5">
                      {!isClicked ? (
                        <div className="mb-5">
                          <h1 className="display-5 fw-bold">
                            Cek Kualitas Udara Di Sini!
                          </h1>
                          <p className="mt-4 lead">
                          Selamat datang di platform inovatif kami untuk memonitor kualitas udara dengan mudah dan akurat. 
                          Temukan informasi real-time tentang polusi udara di sekitar Anda dan ambil langkah proaktif untuk menjaga kesehatan Anda dan lingkungan. 
                          Bersama-sama, mari kita bangun dunia yang lebih bersih dan sehat. Cek kualitas udara di sini, karena setiap napas Anda berharga
                          </p>
                          <Button
                            onClick={() => setIsClicked(true)}
                            variant="success fw-bold mt-3"
                            className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover-bg-indigo-500"
                          >
                            Cek Udara!
                          </Button>
                        </div>
                      ) : (
                        <Col className=" text-left d-flex justify-content-left text-align-left ">
                           <div className="text-left">
                          <h1 className="display-40 fw-bold fs-2">
                          <strong>Hasil </strong>Cek Kualitas Udara di Lokasi Anda
                          </h1>
                          <p className="mt-4 lead text-left d-flex justify-content-left fs-5">
                          Terima kasih telah menggunakan layanan kami untuk memantau kualitas udara di sekitar Anda. Berikut adalah hasil terkini untuk lokasi Anda. 
                          Kami memberikan informasi yang jelas dan mudah dipahami tentang tingkat polusi udara, suhu, dan faktor-faktor lainnya yang memengaruhi lingkungan Anda. 
                          Dengan pemahaman ini, Anda dapat mengambil langkah-langkah tepat untuk menjaga kesehatan dan kenyamanan Anda. Tetap terinformasi, tetap sehat!
                          </p>
                        </div>
                        </Col>
                      )}
                    </Col>
                    {isClicked && (
                      <Col md={5} className="mt-4">
                        <div id="location" className="p-3 w-100">
                          <CardUdara pollutan={pollutan.data} />
                        </div>
                      </Col>
                    )}
                  </Row>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <div className="position-relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-50 start-50 bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900 opacity-60 sm:left-[calc(50%+36rem)]"></div>
                </div>
              </section>
            </>
          )}
        </Container>
        {/* AKHIR INFORMASI KARTU */}

        {/* Bagian Artikel */}
        <div className="my-5 justify-content-center mt-5">
          <h3 className="fw-bold">Artikel</h3>
          <p>Berita Tentang Polusi Udara.</p>
          <Carousel className="carousel-horizontal">
            <CardArtikel />
          </Carousel>
        </div>
        {/* AKHIR Bagian Artikel */}

        <hr />

        {/* Bagian Diskusi */}
        <div className="my-5 justify-content-start">
          <h3 className="text-center fw-bold"><strong>Diskusi</strong> Populer</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Row>
            {/* Kartu Diskusi */}
            <div className="col-lg-12 col-12 mb-3">
              <Card className="border-0">
                <Card.Body style={{ overflow: "auto", height: "20em" }}>
                  <CardDiskusi />
                  <CardDiskusi />                
                </Card.Body>
              </Card>
            </div>

            {/* Form untuk Posting */}
            {/* <div className="col-lg-4 col-12">
              <Card className="border-0">
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Buat Diskusi Baru</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Buat Postingan" />
                    </Form.Group>
                    <Button className="btn btn-success text-white fw-bold w-100">Posting</Button>
                  </Form>
                </Card.Body>
              </Card>
            </div> */}
          </Row>
        </div>
        {/* AKHIR Bagian Diskusi */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
