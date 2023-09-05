import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="items/1">One</Link>
      <Link to="items/2">Two</Link>
    </div>
  );
};

export default Home;
