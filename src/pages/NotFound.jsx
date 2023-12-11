import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="p-5 text-center" style={{ minHeight: '100vh' }}>
            <Row className="text-center">
                <h1 className="">404 Not Found</h1>
                <Link to='/' className='text-success'>Kembali ke Beranda</Link>
            </Row>
        </div>
    );
}

export default NotFound;