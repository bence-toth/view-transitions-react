import useNavigateWithViewTransition from "./useNavigateWithViewTransition";
import animals from "./animals";

import "./SideNavigation.css";

interface SideNavigationProps {
  selectedAnimalId: string;
}

const SideNavigation = ({ selectedAnimalId }: SideNavigationProps) => {
  const navigateWithViewTransition = useNavigateWithViewTransition();

  return (
    <div className="side-navigation">
      <h2>Other interesting animals</h2>
      <nav>
        <ul>
          {animals
            .filter((animal) => animal.id !== selectedAnimalId)
            .map((animal) => (
              <li key={animal.id}>
                <button
                  onClick={() => {
                    navigateWithViewTransition(`/animals/${animal.id}`);
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${animal.imageFilename}`}
                    alt={animal.name}
                    className="small"
                    style={{
                      viewTransitionName: `view-transition-image-${animal.id}`,
                    }}
                  />
                  <span>{animal.name}</span>
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
