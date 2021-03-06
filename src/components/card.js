import React from 'react'
import {
  Card, Button, CardTitle, CardText, Col,
} from 'reactstrap'

export default () => (
  <Col sm className="mb-4">
    <Card body>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
  </Col>
)
