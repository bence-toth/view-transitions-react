import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h1>{itemId}</h1>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Item;
