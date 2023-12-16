import { Card, Row } from "react-bootstrap";

const CardDiskusi = () => {
    return (
        <div className="CardDiskusi mb-3">
            <Card>
                <Card.Body>
                    <Row>
                        <div className="col-lg-1 col-2 text-center me-2">
                            <img src="https://source.unsplash.com/random" alt="profile" width={'50px'} height={'50px'} className='rounded-circle' />
                        </div>
                        <div className="col-lg-7 col-7">
                            <Row>
                                <div className="col-12">User 1</div>
                                <div className="col-12 fw-bold">Diskusi Badai</div>
                                <div className="col-12"><p>Tolong infoin dimana ada badai? Mau penelitian Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est corrupti, </p></div>
                            </Row>
                        </div>
                        <div className="col-lg-3 col-3 d-flex">
                            <Row className=''>
                                <div className="col-12 text-end">1 hari yang lalu</div>
                                <div className="col-12 d-flex justify-content-end">
                                    <span className="me-2">129<i className="fa-regular fa-thumbs-up ms-1"></i></span>
                                    <span>18<i className="fa-regular fa-message ms-1"></i></span>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CardDiskusi