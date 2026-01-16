import "./Expericence.css";

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <h2 className="section-title">Experience</h2>

      <div className="exp-container">

        <div className="exp-card">
          <h3> Software Developer - Park Intelli Solutions - CBE</h3>
          {/* <p className="exp-company">Park Intelli Solutions Private Limited</p> */}
         <h3> <span className="exp-year">AUG 2025 - Present </span></h3>
          <ul class="default-bullets">
         <li>Developed scalable REST APIs using ASP.NET Core for smart-bin operations, ticket management, and travel-related workflows.</li>
         <li>Built optimized LINQ and SQL Server queries with multi-table joins and aggregations for complex data retrieval and analytical reporting.</li> 
          <li>Implemented validation-first API workflows and designed clean service–repository architecture with DTO-based request and response models.</li>
          <li>Integrated backend APIs with Angular frontend (ParkTravel) and implemented QR code–based workflows, mobile GPS location capture, and reporting queries for weekly and project-based metrics.</li>
       
           </ul>
        </div>

        <div className="exp-card">
          <h3>Intern - MD INFO TECH</h3>
          <p className="exp-company"></p>
          <span className="exp-year">JUN 2024 - NOV 2024</span>
          <ul class="default-bullets">
          <li>Developed and tested RESTful Web APIs using ASP.NET Core to perform full CRUD (Create,Read, Update, Delete) operations. </li>
          <li>Improved backend data management by automating the SQL deployment process</li>
          <li>While gaining hands-on experience with version control using Git, and API documentation through Swagger</li>
          
        </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
