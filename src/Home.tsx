import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import items from "./items";

import "./Home.css";

const HomeComponent = () => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  return (
    <div className="main-nav">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            navigateWithViewTransition(`/items/${item.id}`);
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${item.filename}`}
            alt={item.name}
            style={{
              viewTransitionName: `view-transition-image-${item.id}`,
            }}
          />
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default HomeComponent;
