import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Item from "./Item";

import "./App.css";

const App = () => (
  <div className="site">
    <Header />
    <main>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Item />} path="/items/:itemId" />
      </Routes>
    </main>
  </div>
);

export default App;
