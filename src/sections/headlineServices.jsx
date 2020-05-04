import React from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import jigsawImage from '../assets/img/jigsaw.jpg'
import analyticsImage from '../assets/img/analytics.jpg'
import codeImage from '../assets/img/code-screen.jpg'

const Services = () => (
  <div id='services' className='section md-padding'>
    <Container>
      <Row>
        <Col xs='12'>
          <h1>What we do</h1>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='4' className='d-flex align-items-stretch'>
          <Card className='mb-5'>
            <CardImg top width='100%' src={codeImage} alt='Development' />
            <CardBody>
              <CardTitle>Web development</CardTitle>
              <CardSubtitle className='mb-3'>From templated to bespoke solutions</CardSubtitle>
              <CardText>Depending on your needs, ambitions and budget, we can deliver top quality solutions and exceed your expectations</CardText>
              {/* <Button>Text</Button> */}
            </CardBody>
          </Card>
        </Col>
        <Col xs='12' md='4' className='d-flex align-items-stretch'>
          <Card className='mb-5'>
            <CardImg top width='100%' src={jigsawImage} alt='Putting the jigsaw together' />
            <CardBody>
              <CardTitle>Build the jigsaw</CardTitle>
              <CardSubtitle className='mb-3'>There's many parts to an online presence</CardSubtitle>
              <CardText>With 20 years experience working with all types of companies, we can help you put together the puzzle of what to do, along with when and where to do it.</CardText>
              {/* <Button>Text</Button> */}
            </CardBody>
          </Card>
        </Col>

        <Col xs='12' md='4' className='d-flex align-items-stretch'>
          <Card className='mb-5'>
            <CardImg top width='100%' src={analyticsImage} alt='Analysis' />
            <CardBody>
              <CardTitle>Anlaysis</CardTitle>
              <CardSubtitle className='mb-3'>Help you improve your online presence</CardSubtitle>
              <CardText>Whatever stage you are at, we can help you understand where you are and where to go next.</CardText>
              {/* <Button>Text</Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

  </div>
)

export default Services
