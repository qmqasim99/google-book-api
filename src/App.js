import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import BookList from "./components/BookList";
import { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import BookView from "./components/BookView";
import About from "./components/About";

function App() {
  const [searchTerm, setSearchTerm] = useState("react");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />

        <Search setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<BookList searchTerm={searchTerm} />} />
          <Route path="/:book_id" element={<BookView />} />{" "}
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
