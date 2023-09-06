import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import animals from "./animals";

import "./Home.css";

const HomeComponent = () => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  return (
    <div className="main-nav">
      {animals.map((animal) => (
        <button
          key={animal.id}
          onClick={() => {
            navigateWithViewTransition(`/animals/${animal.id}`);
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${animal.filename}`}
            alt={animal.name}
            style={{
              viewTransitionName: `view-transition-image-${animal.id}`,
            }}
          />
          <span>{animal.name}</span>
        </button>
      ))}
    </div>
  );
};

export default HomeComponent;
