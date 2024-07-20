import "../Styles/Cards.css";
import Button from "./Button";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Would you like to know more?</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porta mi purus, sit amet gravida ante imperdiet non. Pellentesque a
        dictum felis.
      </p>
      <div className="form-container">
        <form className="contact-form">
      
          <input
            type="email"
            id="contact-email"
            name="contact-email"
            placeholder="Enter your email"
            required
          />
          <Button text="Sign up" type="submit" />
          
          <div className="socials">
          <p>email@gmail.com</p>
          
          <div>
              <img src="https://cdn0.iconfinder.com/data/icons/social-media-entertainment-line/32/Instagram-512.png"/>
          </div>
      </div>
        </form>
     
      </div>

      <div className="socials">
        {/* Social media links or icons can go here */}
      </div>
    </div>
  );
}

export default Contact;
