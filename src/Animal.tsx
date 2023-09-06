import { useParams } from "react-router-dom";

import SideNavigation from "./SideNavigation";
import animals from "./animals";

import "./Animal.css";

const Animal = () => {
  const { animalId } = useParams();
  const animal = animals.find((animal) => animal.id === animalId);

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
      <SideNavigation selectedAnimalId={animal.id} />
    </div>
  );
};

export default Animal;
