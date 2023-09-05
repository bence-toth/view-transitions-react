import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import items from "./items";

import "./Home.css";

const HomeComponent = () => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  return (
    <div className="gallery">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            navigateWithViewTransition(`items/${item.id}`);
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${item.filename}`}
            alt={item.name}
          />
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default HomeComponent;
