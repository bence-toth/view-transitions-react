import { useParams } from "react-router-dom";

import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import items from "./items";

const ItemComponent = () => {
  const { itemId } = useParams();

  const item = items.find((item) => item.id === itemId);

  const navigateWithViewTransition = useNavigateWithViewTransition();

  if (!item) {
    return null;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={`${process.env.PUBLIC_URL}/${item.filename}`} alt={item.name} />
      <button
        key={item.id}
        onClick={() => {
          navigateWithViewTransition("/");
        }}
      >
        Back home
      </button>
    </div>
  );
};

export default ItemComponent;
