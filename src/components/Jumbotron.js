import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styles from "../../src/styles.css";

const ImageHeader = (props) => {
  return (
    <div>
      <Jumbotron fluid className={styles.counter}>
        <Container fluid>
          <h1 className="display-2">Welcome!</h1>
          <h3 className="lead">Urban dwellers who like fresh produce rejoice! You CAN grow your own fruits and veggies.</h3>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ImageHeader;