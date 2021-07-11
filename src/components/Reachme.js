import { Link } from "react-router-dom";

const Reachme = () => {
  return (
    <div className="reachme">
      <h4>Interested in working with me?</h4>
      <Link to={"/contact"} className="reachme__link">
        Send me a message
      </Link>
    </div>
  );
};
export default Reachme;
