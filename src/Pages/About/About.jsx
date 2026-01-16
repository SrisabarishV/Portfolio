import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-container">


        <div className="about-text">
          <p>
          Hi! I’m  <strong>Srisabarish V</strong>  a Software Developer specializing in ASP.NET Core, MS SQL, C#, MVC, React.js, and Git. <br />
            I build scalable REST APIs, write clean and maintainable code, and design efficient data workflows using LINQ and SQL Server. <br />
           
          </p>
          <p>
             I’ve worked on real-world systems like smart-bin operations, ticket management, and analytical reporting during my internships. <br />
            Focused on validation-first API design and reusable architectures, I aim to deliver reliable, high-performance backend solutions.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
