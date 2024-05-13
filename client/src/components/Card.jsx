import "../styles/card.css";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card({ name, image, id }) {
  return (
    <div>
      <figure className="figure-card-character">
        <NavLink to={`/detail/${id}`}>
          <img src={image} alt="character-poster" className="picture-card"/>
          <figcaption className="character-name">{name}</figcaption>
        </NavLink>
      </figure>
    </div>
  );
}

export default Card;

// Card.propTypes = {
//  image: PropTypes.object.isRequired,
//  name: PropTypes.string.isRequired,
// }
