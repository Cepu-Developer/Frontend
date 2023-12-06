import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { GoArrowUpRight } from "react-icons/go";

const CardArtikel = () => {
  return (
    <Col className="mb-4 col-lg-3 col-12">
      <Card className="rounded-4 border-0">
        <Card.Img className="border-0" height={"200px"} variant="top" src="https://source.unsplash.com/random" />
        <Card.Body>
          <Card.Link href="" className="text-success fw-bold d-flex justify-content-between align-items-center">
            <span>Selengkapnya</span>
            <span className="fs-3">
              <GoArrowUpRight />
            </span>
          </Card.Link>
          <Card.Title className="fw-bold my-2">Berita Terkini</Card.Title>
          <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non dolorem vero expedita iusto ducimus sint quae impedit ut</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardArtikel;
