import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Item from "./Item";

const App = () => (
  <div>
    <header>Some header</header>
    <main>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Item />} path="items/:itemId" />
      </Routes>
    </main>
  </div>
);

export default App;
