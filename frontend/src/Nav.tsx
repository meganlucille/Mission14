import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopBanner(): JSX.Element {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Movie Collection App'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav className="ml-auto">
              <Link
                to="/"
                style={{
                  marginRight: '10px',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Home
              </Link>
              <Link
                to="/podcasts"
                style={{
                  marginRight: '10px',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Podcasts
              </Link>
              <Link
                to="/movies"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Movies
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBanner;
