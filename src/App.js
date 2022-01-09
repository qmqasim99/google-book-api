import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("react");

  return (
    <div className="App">
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <BookList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
