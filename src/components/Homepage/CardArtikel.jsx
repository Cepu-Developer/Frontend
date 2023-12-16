/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { GoArrowUpRight } from "react-icons/go";
import { Col, Carousel, Row } from "react-bootstrap";

const CardArtikel = () => {
  const [beritaPolusiUdara, setBeritaPolusiUdara] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://657d0207853beeefdb9a2ecb.mockapi.io/news");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data) {
          setBeritaPolusiUdara(data);
        } else {
          console.error("Data format is not as expected:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
                  <Card.Img className="border-0 img-fluid" height={"200px"} variant="top" src={berita.urlToImage} />
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
