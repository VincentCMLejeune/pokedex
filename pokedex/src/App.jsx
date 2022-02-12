import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home/Home";
import Pokemon from "./screens/pokemon/Pokemon";

import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
