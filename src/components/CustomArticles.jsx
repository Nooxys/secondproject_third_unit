import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import SingleCard from './SingleCard'

const CustomArticles = () => {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6} className="text-center my-3 ">
            <h4 className="display-6 text-white fst-italic">
              Related Articles
            </h4>
            <Row className="g-3 mt-2 bg-black border border-primary-subtle rounded py-3 px-3">
              <Col lg={6}>
                <Card className="text-center" data-bs-theme="dark">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body className="bg-black">
                    <Card.Title>Climatic Change</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="dark" className="articlesbut">
                      Go somewhere
                    </Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="text-center" data-bs-theme="dark">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body className="bg-black">
                    <Card.Title>How we check the weather</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="dark " className="articlesbut">
                      Go somewhere
                    </Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">3 days ago</Card.Footer>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="text-center" data-bs-theme="dark">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body className="bg-black">
                    <Card.Title>100% accurate!</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="dark" className="articlesbut">
                      Go somewhere
                    </Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">1 days ago</Card.Footer>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="text-center" data-bs-theme="dark">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body className="bg-black">
                    <Card.Title>Respect our planet</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="dark" className="articlesbut">
                      Go somewhere
                    </Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="text-center my-3">
            <h4 className=" display-6 text-white fst-italic">
              In this Moment around the world
            </h4>
            <Row className="g-3 mt-2 bg-black border border-primary-subtle rounded py-3 px-3">
              <Col lg={6}>
                <SingleCard name={'London'} country={'GB'} />
              </Col>
              <Col lg={6}>
                <SingleCard name={'Milan'} country={'IT'} />
              </Col>
              <Col lg={6}>
                <SingleCard name={'Tokyo'} country={'JP'} />
              </Col>
              <Col lg={6}>
                <SingleCard name={'Rome'} country={'IT'} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CustomArticles
