import "../Styles/Cards.css";
import Button from "./Button";
import PropTypes from "prop-types";
import defaultImage from "../Assets/placeholder-avatar.jpg";

function TeamCard({ image, name, roles, description, imagePosition, porfolioVisibility, githubVisibility }) {
  return (
    <div className={`card-cont ${imagePosition}`}>
      <div className="image-container">
      <img className="pixelated" src={image} alt={name} />
        <img className="headShot" src={image} alt={name} />
      </div>
      <div className="content-container">
        <h3>{name}</h3>
        <div className="highlight">
          {roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-buttons">
        <Button text="LinkedIn"/>
        <Button text="Portfolio" show={porfolioVisibility}/>
        <Button text="Github" show={githubVisibility}/>
        </div>
      
      </div>
    </div>
  );
}

// Setting default props
TeamCard.defaultProps = {
  image: defaultImage,
  name: "Default Name",
  roles: ["Default Role"],
  description: "Default Description.",
  imagePosition: "right",
  porfolioVisibility: "show",
  githubVisibility: "show"
};

// Defining the prop types
TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  porfolioVisibility: PropTypes.oneOf(["show", "hide"]),
  githubVisibility: PropTypes.oneOf(["show", "hide"])
};

export default TeamCard;
