import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap/esm/'
const CustomCarousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  src={require('../assets/1659981913-stelle-cadenti-1.jpg')}
                  text="First slide"
                  alt="foto"
                  width={500}
                  height={400}
                />
                <Carousel.Caption>
                  <h3>Impressive view this night!</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require('../assets/blog-post_rain.jpg')}
                  alt="foto"
                  text="Second slide"
                  width={500}
                  height={400}
                />
                <Carousel.Caption>
                  <h3>
                    Rain all across the world! <i class="bi bi-emoji-smile"></i>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require('../assets/istockphoto-491701259-612x612.jpg')}
                  text="Third slide"
                  alt="foto"
                  width={500}
                  height={400}
                />
                <Carousel.Caption>
                  <h3>Sunny days incoming!</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require('../assets/Shopify_Addon_PSPScript_RainyDay_large.jpg')}
                  text="Third slide"
                  alt="foto"
                  width={500}
                  height={400}
                />
                <Carousel.Caption>
                  <h3>With all that rain..</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CustomCarousel
