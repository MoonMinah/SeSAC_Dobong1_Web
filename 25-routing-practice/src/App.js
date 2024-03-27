import React from "react";
import { Route, Routes } from "react-router-dom";
import Student from "./pages/Student";
import "./styles/style.scss";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:studentId" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
