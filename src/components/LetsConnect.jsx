import SocialMedia from "./snippets/SocialMedia";

const LetsConnect = () => {
 
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500" id="contact">
      <div>
        <p className="main-text">
          <span>lets</span>
          <span>connect</span>
        </p>
        <p></p>
        <div className="services">
          <p className="heading"> i'm Always interested about </p>
            <ul>
              <li>frontend development </li>
              <li>website development </li>
              <li>progressive web apps </li>
            </ul>
        </div>
      </div>
      <div className="contact-me">
        <h2>contact me</h2>
        <div className="contacts">
          <p> vukkusilanithin@gmail.com </p>
          <p> +91 8330949100 </p>
          <p> +91 9550067442 </p>
          <SocialMedia/>
        </div>
       
      </div>
      
      <div className="designedBy">
        <p> designed and developed by Nithin v </p>
      </div>
    </footer>
  );
};

export default LetsConnect;
