import { Card, Spinner } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SingleCard = (props) => {
  const [meteo, setMeteo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const myFetch = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        props.name +
        ',' +
        props.country +
        '&appid=16b6d4ef60e0c4aaa719d887018acf5a&units=metric'
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella ricezione dati dal server')
        }
      })
      .then((objmeteo) => {
        console.log(objmeteo)
        setMeteo(objmeteo)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    myFetch()
  }, [])
  return (
    <>
      {isLoading && <Spinner animation="border" variant="dark"></Spinner>}
      {!isLoading && (
        <Link to={'/Details/' + meteo.name} className="text-decoration-none">
          <Card data-bs-theme="dark">
            <Card.Body>
              <Card.Title>{meteo.name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Weather: {meteo.weather[0].description}
                </ListGroup.Item>
                <ListGroup.Item>
                  max temp: <span>{meteo.main.temp_max}&deg;</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  min temp: <span>{meteo.main.temp_min}&deg;</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Link>
      )}
    </>
  )
}

export default SingleCard
