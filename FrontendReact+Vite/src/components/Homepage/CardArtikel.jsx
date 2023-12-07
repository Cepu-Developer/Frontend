/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { GoArrowUpRight } from "react-icons/go";
import { Col, Carousel, Row } from "react-bootstrap";

const CardArtikel = () => {
  const [beritaPolusiUdara, setBeritaPolusiUdara] = useState([]);

  useEffect(() => {
    // Pemanggilan API dilakukan di sini
    const fetchData = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=pollution&apiKey=27924b3220654666ba7a70e6e9d12917");
        const data = await response.json();
        setBeritaPolusiUdara(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Bagian ini untuk membagi data berita menjadi kelompok 4
  const groupedBerita = beritaPolusiUdara.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / 4);
    acc[groupIndex] = acc[groupIndex] || [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <Carousel className="carousel-horizontal">
      {groupedBerita.map((group, groupIndex) => (
        <Carousel.Item key={groupIndex} className="mb-4">
          <Row>
            {group.map((berita, index) => (
              <Col lg={3} xs={12} key={index}>
                <Card className="rounded-4 border-0">
                  <Card.Img className="border-0" height={"200px"} variant="top" src={berita.urlToImage} />
                  <Card.Body>
                    <Card.Link href={berita.url} className="text-success fw-bold d-flex justify-content-between align-items-center">
                      <span>Selengkapnya</span>
                      <span className="fs-3">
                        <GoArrowUpRight />
                      </span>
                    </Card.Link>
                    <Card.Title className="fw-bold my-2">{berita.title}</Card.Title>
                    <Card.Text>{berita.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardArtikel;
