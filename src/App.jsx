
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Hotel 🏨</h1>
      <Link to="/rooms">Rooms</Link>
      <Link to="/booking">Booking</Link>
    </div>
  );
}

function Rooms() {
  return <h1>Our Hotel Rooms</h1>;
}

function Booking() {
  return <h1>Hotel Booking Page</h1>;
}

function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, this page does not exist!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
