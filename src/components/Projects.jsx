import Project from "./Project";
import portal1 from "../assets/icons/portal1.jpeg";
const Projects = () => {
  const projectsData = [
    {
      id: "moneytap",
      image: portal1,
      heading: "MoneyTap(Freo)",
      techStack: ["html", "css", "js"],
      aboutProject:"With 3.2 years of experience at Moneytap, I developed the Collections Platform from scratch, implementing role-based access control, API integration, filters, and search functionality."
    },
   
  ];
  return (
    <section id="projects" data-aos="fade-up" data-aos-duration="1500">
      <div className="current-projects">
        <div className="section-heading">
          <h2>CURRENT PROJECTS</h2>
          <p>
            Your website is like a digital representation of your brand, and
            I'll make sure it's the best one out there.
          </p>
        </div>
        <div className="projects">
          {projectsData.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
