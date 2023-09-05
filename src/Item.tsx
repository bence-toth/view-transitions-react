import { Link, useParams } from "react-router-dom";

import items from "./items";

const ItemComponent = () => {
  const { itemId } = useParams();

  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return null;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={`${process.env.PUBLIC_URL}/${item.filename}`} alt={item.name} />
      <Link to="/">Back home</Link>
    </div>
  );
};

export default ItemComponent;
