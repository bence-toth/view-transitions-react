import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";

import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import items from "./items";

import "./Header.css";

const Header = () => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  const { pathname } = useLocation();
  const match = matchPath("/items/:itemId", pathname);
  const item = items.find((item) => item.id === match?.params.itemId);

  return (
    <header className="site-header">
      {item === undefined ? (
        <span>Interesting animals</span>
      ) : (
        <>
          <button
            onClick={() => {
              navigateWithViewTransition("/");
            }}
          >
            Back home
          </button>
          <span>{item.name}</span>
        </>
      )}
    </header>
  );
};

export default Header;
