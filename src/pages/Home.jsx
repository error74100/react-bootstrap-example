import Header from '../components/Header';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <>
      <Header />

      <Container style={{ textAlign: 'center' }}>
        - react + react-bootstrap example.
      </Container>
    </>
  );
}

export default Home;
