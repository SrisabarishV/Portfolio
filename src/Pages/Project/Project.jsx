import "./Project.css";

const Projects = () => {
  const projectList = [
     {
      title: "YouTube-Clone",
      tech: "React Js",
      link: "https://github.com/SrisabarishV/YouTube-React",
      demo: "https://srisabarishv.github.io/YouTube-React/", // Replace with actual live link if you have one
    },
    {
      title: "Appointment Booking System",
      tech: "ASP.NET MVC",
      link: "https://github.com/SrisabarishV/AppointmentBookingSystem",
      demo: null, // No demo link available
    },
    {
      title: "QR Code Generator",
      tech: "React JS",
      link: "https://github.com/SrisabarishV/qr-code-gen/", // Assumed GitHub link
      demo: "https://srisabarishv.github.io/qr-code-gen/",
    },
    {
      title: "Admin/User Role Based Authorization",
      tech: ".NET",
      link: "https://github.com/SrisabarishV/Authorization-as-Admin-User-MVC",
      demo: null,
    },
    {
      title: "MVC API Integration",
      tech: ".NET MVC",
      link: "https://github.com/SrisabarishV/Integrate_Mvc_Api",
      demo: null,
    },
   
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            
            <div className="project-btn-group">
              {/* Only show Demo button if a link exists */}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-demo"
                >
                 Demo
                </a>
              )}
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-github"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                  alt="GitHub" 
                  className="git-icon"
                /> 
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;