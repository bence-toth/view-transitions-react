import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import animals from "./animals";

import "./Header.css";

const Header = () => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  const { pathname } = useLocation();
  const match = matchPath("/animals/:animalId", pathname);
  const animal = animals.find((animal) => animal.id === match?.params.animalId);

  return (
    <header className="site-header">
      {animal === undefined ? (
        <h1 className="title">Interesting animals</h1>
      ) : (
        <>
          <button
            className="back-button"
            onClick={() => {
              navigateWithViewTransition("/");
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          <h1 className="title">{animal.name}</h1>
        </>
      )}
    </header>
  );
};

export default Header;
