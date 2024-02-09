import { Container, Row, Col } from 'react-bootstrap'

const NotFound = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center py-5 vh-100 ">
          <Col md={6} className="text-white pb-5 text-center">
            <h1>Error 404: Content not Found!</h1>
            <img
              className="mt-5"
              src="https://cdn.pixabay.com/photo/2013/07/13/11/57/bear-159023_960_720.png"
              alt="bear_png"
              width={300}
              height={400}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NotFound
