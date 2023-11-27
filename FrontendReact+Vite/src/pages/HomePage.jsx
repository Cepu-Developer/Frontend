import { Button, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavbarComponent from '../components/Navbar';
import CardArtikel from '../components/Homepage/CardArtikel';
import Footer from '../components/Footer';
import CardDiskusi from '../components/Homepage/CardDiskusi';

const HomePage = () => {
  return (
    <div className="homepage">
      <NavbarComponent />
      <div className="container py-lg-5 pt-0">
        {/* CARD INFORMATION */}
        <Card className='p-5 border-0 text-center'>
          <Card.Body className='p-lg-5'>
            <h3 className="fw-bold">Cek kualitas udara disini</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente culpa soluta tempora illum exercitationem veniam quo dolor! Non, repellat nisi, nam enim quam quo rerum eveniet facere minima id est!</p>
            <div className="align-items-center">
              <form action="" method="get" className='d-flex col-lg-8 col-12 mx-auto'>
                <input type="text" className='form-control me-2' placeholder='Masukkan apa?' name='search' />
                <button type="submit" className='btn btn-success'>Button</button>
              </form>
            </div>
          </Card.Body>
        </Card>
        {/* CARD INFORMATION */}

        <div className="my-5 justify-content-center">
          <h3 className='fw-bold'>Artikel</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui quo iste dignissimos quis obcaecati nulla.</p>
          <Row className='d-flex m-0'>
            <CardArtikel />
            <CardArtikel />
            <CardArtikel />
            <CardArtikel />
          </Row>
        </div>

        <hr />

        <div className="my-5 justify-content-center">
          <h3 className='text-center fw-bold'>Diskusi Populer</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Row>
            <div className="col-lg-8 col-12 mb-3">
              <Card className='border-0'>
                <Card.Body style={{ overflow: 'auto', height:'500px' }}>
                  <CardDiskusi />
                  <CardDiskusi />
                  <CardDiskusi />
                  <CardDiskusi />
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-12">
              <Card className='border-0'>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Buat Diskusi Baru</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder='Buat Postingan' />
                    </Form.Group>
                    <Button className='btn btn-success text-white fw-bold w-100'>Posting</Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage