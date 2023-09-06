import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Animal from "./Animal";

import "./App.css";

const App = () => (
  <div className="site">
    <Header />
    <main>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Animal />} path="/animals/:animalId" />
      </Routes>
    </main>
  </div>
);

export default App;
