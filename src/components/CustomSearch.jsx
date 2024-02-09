import { Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CustomSearch = () => {
  const [city, setCity] = useState('')
  const navigate = useNavigate()
  return (
    <>
      <Alert className="w-50 mx-auto text-center my-5 bg-black text-white fst-italic ">
        {' '}
        <p className="display-6 ">Look up the weather conditions here!</p>{' '}
        <InputGroup className="mb-3" data-bs-theme="dark">
          <InputGroup.Text id="inputGroup-sizing-default">
            City:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            placeholder="London, Milan, Tokyo.."
            value={city}
            onChange={(e) => {
              setCity(e.target.value)
              console.log(city)
            }}
          />
        </InputGroup>
        <Button
          variant="dark"
          id="buttonsearch"
          onClick={() => navigate('/Details/' + city)}
        >
          Search Meteo!
        </Button>
      </Alert>
    </>
  )
}
export default CustomSearch
