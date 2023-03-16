import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
