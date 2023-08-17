import './App.css';
import {Navbar,Nav,Container }from 'react-bootstrap'
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
function App() {
    return (
      <BrowserRouter>
    <div className="App">
          <>
              <Navbar bg="dark" data-bs-theme="dark">
                  <Container>
                      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to="/home">Home</Nav.Link>
                          <Nav.Link as={Link} to="/about">About</Nav.Link>
                          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                      </Nav>
                  </Container>
              </Navbar>
          </>
          <div>
              <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/home" element={<Home />} />
              </Routes>
          </div>
            </div>
        </BrowserRouter>
              
             );
           }

export default App;
