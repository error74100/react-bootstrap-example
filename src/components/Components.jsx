import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Header from './Header';

function Components() {
  return (
    <>
      <Header />

      <Container>
        <h2>Layout</h2>
      </Container>

      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <h2>Button</h2>
      </Container>

      <Container>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
      </Container>

      <Container>
        <h2>Stacks</h2>
      </Container>

      <Container>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">First item</div>
          <div className="p-2 ms-auto">Second item</div>
          <div className="p-2">Third item</div>
        </Stack>
      </Container>

      <Container>
        <h2>Form</h2>
      </Container>

      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>

      <Container>
        <h2>Select</h2>
      </Container>

      <Container>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Container>

      <Container>
        <h2>Checks and radios</h2>
      </Container>

      <Container>
        <Form>
          {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />

              <Form.Check
                disabled
                type={type}
                label={`disabled ${type}`}
                id={`disabled-default-${type}`}
              />
            </div>
          ))}
        </Form>

        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
          <Form.Check // prettier-ignore
            disabled
            type="switch"
            label="disabled switch"
            id="disabled-custom-switch"
          />
        </Form>
        <br />

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Container>

      <Container>
        <h2>Tab</h2>
      </Container>

      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home 1
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile 2
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact 3
          </Tab>
        </Tabs>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
}

export default Components;
