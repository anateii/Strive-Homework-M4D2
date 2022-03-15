import { Container, Card, Row, Button, Col } from "react-bootstrap";
import books from "../data/fantasy.json";

const LatestRelease = () => (
  <Container fluid>
    <Row>
      {books.map((book) => {
        return (
          <Col>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="dark">{book.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
);

export default LatestRelease;
