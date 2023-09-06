import { useParams } from "react-router-dom";

import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import animals from "./animals";

import "./Animal.css";

const Animal = () => {
  const { animalId } = useParams();

  const animal = animals.find((animal) => animal.id === animalId);

  const navigateWithViewTransition = useNavigateWithViewTransition();

  if (!animal) {
    return null;
  }

  return (
    <div className="animal">
      <article>
        <div className="description">
          {animal.description.split("\n").map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
        <img
          className="main-image"
          src={`${process.env.PUBLIC_URL}/${animal.filename}`}
          alt={animal.name}
          style={{ viewTransitionName: `view-transition-image-${animal.id}` }}
        />
      </article>
      <div>
        <h2>Other interesting animals</h2>
        {animals
          .filter((animal) => animal.id !== animalId)
          .map((animal) => (
            <button
              key={animal.id}
              onClick={() => {
                navigateWithViewTransition(`/animals/${animal.id}`);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/${animal.filename}`}
                alt={animal.name}
                className="small"
                style={{
                  viewTransitionName: `view-transition-image-${animal.id}`,
                }}
              />
              {animal.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Animal;
