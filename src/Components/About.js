import "../Styles/Cards.css";
import Button from "./Button";
import defaultImage from "../Assets/placeholder-image.webp";

function About() {
  return (
    <div className="about-container">
<div className="about-start">
<div className="highlight">
        <p>Unity2D</p>
        <p>2h gameplay</p>
        <p>WebGL</p>
      </div>

      <div className="about-buttons">
          <Button text="master doc" />
          <Button text="character library" />
      </div>
</div>
     
     

      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porta mi purus, sit amet gravida ante imperdiet non. Pellentesque a
        dictum felis, euismod maximus diam. Suspendisse et purus iaculis augue
        ultrices suscipit. Quisque volutpat est ut nibh finibus, id venenatis ex
        imperdiet. Fusce urna est, iaculis a mollis ac, auctor sed velit. Aenean
        elementum ornare tristique. Cras aliquam sit amet leo fringilla
        hendrerit. Suspendisse blandit augue turpis, id ullamcorper magna ornare
        vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Etiam gravida felis eu auctor vehicula. Aliquam
        at vulputate magna. Nulla pulvinar odio et nulla iaculis, vitae interdum
        quam viverra. Praesent volutpat erat quis augue porttitor consectetur.
        Pellentesque tristique, mi eu vestibulum blandit, odio elit consectetur
        elit, eget maximus diam tortor in magna. Aliquam et erat eu justo tempor
        rutrum. Sed elementum erat diam, ornare gravida dui consectetur
        placerat. Aenean mollis dignissim tincidunt. Vestibulum ac consectetur
        est. Maecenas quis dui lacinia sem pretium lacinia. Sed placerat leo
        venenatis ante volutpat volutpat. Fusce facilisis purus a risus mollis
        dignissim. Suspendisse purus tortor, convallis ut lectus in, commodo
        ullamcorper arcu. Donec ac est convallis, varius sapien a, congue lacus.
        Vestibulum nec sagittis nisi. Aliquam ligula augue, rutrum a faucibus
        eu, placerat at urna. Nam nec maximus magna. Mauris quis nunc neque. Sed
        non sodales urna. Morbi volutpat et diam vitae dictum. Proin mollis nunc
        ut lobortis aliquam. Integer eu dolor id nunc blandit dapibus. Morbi non
        orci scelerisque, porta est sed, commodo arcu. Suspendisse tristique
        velit risus, eu congue lectus tempor quis. In hac habitasse platea
        dictumst. Quisque a ornare dui, vitae vehicula quam. Fusce erat felis,
        facilisis ac ipsum scelerisque, euismod molestie enim. Integer blandit
        tempor odio, quis viverra erat pellentesque porttitor. Suspendisse
        tempor lacus eget euismod mollis. Phasellus dapibus maximus lectus,
        vitae ultrices libero vehicula ut. Morbi accumsan est ut sem venenatis
        feugiat. Proin quis neque non mi mattis auctor. Aliquam id erat ac nunc
        tincidunt molestie. Phasellus dolor augue, rhoncus nec ex nec, fermentum
        dignissim nisl. 
      </p>

      <div className="cont-container">
        
        <img src={defaultImage} alt="alt" />
      </div>
    </div>
  );
}

export default About;
