import { Link } from "react-router-dom";

const Reachme = ({ linkToFirst, linkToSecond, textFirst, textSecond }) => {
  return (
    <div className="reachme">
      <h4>Interested in working with me?</h4>
      <div className="reachme__btns">
        {" "}
        <Link to={linkToFirst} className="reachme__link">
          {textFirst}
        </Link>
        <Link to={linkToSecond} className="reachme__link">
          {textSecond}
        </Link>
      </div>
    </div>
  );
};
export default Reachme;

// "/contact"
// Send me a message
// View my projects
