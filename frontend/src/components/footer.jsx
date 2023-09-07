import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const footer = () => {
  return (
    <>
        <footer>
            <Container className='footer my-3'>
                <Row>
                    <Col className='text-center'>
                        <span className='text-center'>copyright &copy; Jaspreet singh </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default footer