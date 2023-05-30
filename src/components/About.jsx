import SocialMedia from "./snippets/SocialMedia";
const About = () => {
  return (
    <main id="about">
      <div className="about-me">
        <div className="section-heading">
          <h2>ABOUT ME</h2>
        </div>
        <div className="profile">
          {/* <div className="pic" data-aos="fade-up" data-aos-duration="1500">
            <img src={profilePic} alt="" />
          </div> */}
          <div className="content" data-aos="fade-up">
            <p>
              Hello, my name is Nithin, and I am a dedicated and experienced
              freelance web developer. With three years of industry experience,
              I have honed my skills across several technologies, enabling me to
              deliver exceptional websites to clients around the world.
            </p>
            <p>
            Passionate about creating visually appealing and user-friendly web
              solutions, I strive to stay up-to-date with the latest trends and
              technologies in the ever-evolving world of web development. My
              strong foundation in website development allows me
              to tackle diverse projects, from simple and elegant personal
              websites to complex e-commerce platforms.
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
