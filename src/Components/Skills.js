import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Skills() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/TkHSnxv/Screenshot-2023-06-01-225126.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Frontend Development</h3>
        <p>JavaScript, HTML, CSS, Bootstrap, ReactJS, ReactRouter</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/tJcm07r/Screenshot-2023-06-01-231457.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className='text-black'>Backend Development</h3>
        <p className='text-black'>Java, OOP, MySQL Editor, Apache Maven, Spring Boot, SwaggerAPI</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.ibb.co/8x3RXb7/Screenshot-2023-06-01-232729.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Game Development</h3>
        <p>
          Text-Based Adventure Game, War, Tic-Tac-Toe, Snake
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Skills