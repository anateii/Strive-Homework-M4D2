import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Card } from "react-bootstrap";
import data from "../Data/scifi.json";
import GetComments from "./Comment";

class MyBook extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <GetComments />
          {data.map((element) => (
            <Card
              key={element.asin}
              style={{ height: "auto", width: "20rem", margin: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "500px" }}
                src={element.img}
              />
              <Card.Body>
                <div className="text-dark">
                  <h4>{data[0].asin}</h4>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default MyBook;
