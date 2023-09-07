import { useParams } from "react-router-dom";

import { BsWikipedia } from "react-icons/bs";
import { BiLogoUnsplash } from "react-icons/bi";

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
        <div>
          <img
            className="main-image"
            src={`${process.env.PUBLIC_URL}/${animal.imageFilename}`}
            alt={animal.name}
            style={{ viewTransitionName: `view-transition-image-${animal.id}` }}
          />
          <nav className="source-links">
            <ul>
              <li>
                <a
                  href={animal.imageSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoUnsplash />
                </a>
              </li>
              <li>
                <a
                  href={animal.descriptionSource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWikipedia />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
      <SideNavigation selectedAnimalId={animal.id} />
    </div>
  );
};

export default Animal;
