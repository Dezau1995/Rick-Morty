import "../styles/card.css"
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card({name, image, id }) {
	return (
		<figure className="image-character">
			<NavLink to={`/detail/${id}`}>
			<img src={image} alt="character-poster"/>
			<figcaption className="character-name">{name}</figcaption>
			</NavLink>
		</figure>
		
	)
}

export default Card;

// Card.propTypes = {
//  image: PropTypes.object.isRequired,
//  name: PropTypes.string.isRequired,
// }
