import { useState } from "react";
import { Button, Form, Row, Carousel } from "react-bootstrap";
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
      {/* Navbar */}
      <NavbarComponent />

      <div className="container py-lg-5 pt-0">
        {/* INFORMASI KARTU */}
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
                  <div className="text-center">
                    <h1 className="display-4 fw-bold">
                      Cek Kualitas Udara Di Sini!
                    </h1>
                    <p className="mt-4 lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti ad suscipit ipsa modi, deserunt quos dignissimos quis debitis tempore alias, facilis voluptate non porro blanditiis ea consequatur aperiam quibusdam.
                    </p>

                    <div className="mt-4 d-flex justify-content-center align-items-center gap-3">
                      <Button
                        onClick={() => setIsClicked(true)}
                        variant="btn btn-success fw-bold"
                        className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover-bg-indigo-500"
                      >
                        Cek Udara!
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <div className="position-relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-50 start-50 bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900 opacity-60 sm:left-[calc(50%+36rem)]"></div>
                </div>
              </section>

              {pollutan && (
                <section id="location" className="d-flex justify-content-center align-items-middle">
                  <CardUdara pollutan={pollutan.data} />
                </section>
              )}
            </>
          )}
        </Container>
        {/* AKHIR INFORMASI KARTU */}

        {/* Bagian Artikel */}
        <div className="my-5 justify-content-center">
          <h3 className="fw-bold">Artikel</h3>
          <p>Berita Tentang Polusi Udara.</p>
          <Carousel className="carousel-horizontal">
            <CardArtikel />
          </Carousel>
        </div>
        {/* AKHIR Bagian Artikel */}

        <hr />

        {/* Bagian Diskusi */}
        <div className="my-5 justify-content-center">
          <h3 className="text-center fw-bold">Diskusi Populer</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Row>
            {/* Kartu Diskusi */}
            <div className="col-lg-8 col-12 mb-3">
              <Card className="border-0">
                <Card.Body style={{ overflow: "auto", height: "500px" }}>
                  <CardDiskusi />
                  <CardDiskusi />
                  <CardDiskusi />
                  <CardDiskusi />
                </Card.Body>
              </Card>
            </div>

            {/* Form untuk Posting */}
            <div className="col-lg-4 col-12">
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
            </div>
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
