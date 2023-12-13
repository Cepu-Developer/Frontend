import { Card, Row, Form, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import CardDiskusi from "../components/Homepage/CardDiskusi";

function Diskusi() {
  return (
    <div style={{ background: "#fcfafa", minHeight: "100vh" }}>
      <NavbarComponent />
      <div className="container">
        {/* You can include multiple instances of CardDiskusi here */}
        <div className="mt-2 justify-content-center">
        <h4 className="text-center">Diskusi <strong>Populer</strong></h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Row>
            {/* Kartu Diskusi */}
            <div className="col-lg-8 col-12 mb-3">
              <Card className="border-0 ">
                <Card.Body style={{ overflow: "auto", height: "500px" }}>
                  <CardDiskusi />
                  <CardDiskusi />
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
                <Card.Body className=" w-75">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="d-flex justify-content-center">Buat Diskusi Baru</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Buat Postingan"
                      />
                    </Form.Group>
                    <Button className="btn btn-success text-white fw-bold w-100">
                      Posting
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </div>
        {/* <CardDiskusi /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Diskusi;
