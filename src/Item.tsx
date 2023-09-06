import { useParams } from "react-router-dom";

import useNavigateWithViewTransition from "./useNavigateWithViewTransition";

import items from "./items";

import "./Item.css";

const ItemComponent = () => {
  const { itemId } = useParams();

  const item = items.find((item) => item.id === itemId);

  const navigateWithViewTransition = useNavigateWithViewTransition();

  if (!item) {
    return null;
  }

  return (
    <div className="item">
      <h1>{item.name}</h1>
      <img
        className="big"
        src={`${process.env.PUBLIC_URL}/${item.filename}`}
        alt={item.name}
        style={{ viewTransitionName: `view-transition-image-${item.id}` }}
      />
      <div>
        {items
          .filter((item) => item.id !== itemId)
          .map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigateWithViewTransition(`/items/${item.id}`);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/${item.filename}`}
                alt={item.name}
                className="small"
                style={{
                  viewTransitionName: `view-transition-image-${item.id}`,
                }}
              />
              {item.name}
            </button>
          ))}
      </div>
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
