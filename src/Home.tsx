import { Link } from "react-router-dom";

import items from "./items";

import "./Home.css";

const HomeComponent = () => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <Link key={item.id} to={`items/${item.id}`}>
          <img
            src={`${process.env.PUBLIC_URL}/${item.filename}`}
            alt={item.name}
          />
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default HomeComponent;
