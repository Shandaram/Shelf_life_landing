import "../Styles/Cards.css";
import Button from "./Button";
import pixelPlace from "../Assets/pixelart.webp";
import pixelPlant from "../Assets/plant.avif";

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="big"> Shelf Life - manage your own library!</h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porta mi purus, sit amet gravida ante imperdiet non. Pellentesque a
          dictum felis, euismod maximus diam. Suspendisse et purus iaculis augue
          ultrices suscipit. Quisque volutpat est ut nibh finibus, id venenatis
          ex imperdiet. Fusce urna est, iaculis a mollis ac, auctor sed velit.
          Aenean elementum ornare tristique. Cras aliquam sit amet leo fringilla
          hendrerit. Suspendisse blandit augue turpis, id ullamcorper magna
          ornare vel. 
        </p>
        <Button text="play" />

      </div>

      <img className="comp" src={pixelPlace}/>
      <img className="plant" src={pixelPlant}/>
    </div>
  );
}

export default Landing;
