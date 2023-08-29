import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import {Home} from "./pages/home"
import {Fruits} from "./pages/fruits"
import { Contact } from "./pages/contact"
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCarContex"

export function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}


