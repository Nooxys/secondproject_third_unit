import { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
const Details = () => {
  const [city, setCity] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams().cityID

  const cityFetch = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        params +
        '&appid=16b6d4ef60e0c4aaa719d887018acf5a'
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella ricezione dati dal server')
        }
      })
      .then((ocity) => {
        console.log(ocity)
        setCity(ocity)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    cityFetch()
  }, [])
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center py-5 vh-100">
          <Col xs={12} md={6} className="text-center">
            {isLoading && <Spinner animation="border" variant="dark"></Spinner>}
            {!isLoading && (
              <>
                <h1 className="display-6 text-white fst-italic mb-5">
                  {' '}
                  In this moment in {city.name}
                </h1>
                <Card data-bs-theme="dark">
                  <Card.Body>
                    <Card.Title>{city.name}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Weather: {city.weather[0].description}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        max temp: <span>{city.main.temp_max}&deg;</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        min temp: <span>{city.main.temp_min}&deg;</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Wind speed: {city.wind.speed} km/h
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Cloud dens: {city.clouds.all}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Humidity: {city.main.humidity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Pressure: {city.main.pressure}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Details
