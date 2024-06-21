import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate();

  return (
    <>
      <Container className="header_wrap">
        <Stack direction="horizontal" gap={3}>
          <Button
            variant="primary"
            onClick={() => {
              nav('/');
            }}
          >
            Home
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              nav('/components');
            }}
          >
            Components
          </Button>

          <Button
            variant="success"
            onClick={() => {
              nav('/utill');
            }}
          >
            Utill
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default Header;
