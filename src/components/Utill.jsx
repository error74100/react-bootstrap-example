import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Spinner from 'react-bootstrap/Spinner';

import Table from 'react-bootstrap/Table';

import Header from './Header';
import { useState } from 'react';

function Utill() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [canvasShow, setCanvasShow] = useState(false);
  const handleClose2 = () => setCanvasShow(false);
  const handleShow2 = () => setCanvasShow(true);

  return (
    <>
      <Header />

      <Container>
        <h2>Modal</h2>
      </Container>

      <Container>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <Container>
        <h2>Offcanvas</h2>
      </Container>

      <Container>
        <Button variant="primary" onClick={handleShow2}>
          Launch
        </Button>

        <Offcanvas show={canvasShow} onHide={handleClose2}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <Container>
        <h2>Spinners</h2>
      </Container>

      <Container>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </Container>

      <Container>
        <h2>Tables</h2>
      </Container>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Utill;
