import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="edu-timeline">

        {/* 1 — RIGHT SIDE */}
        <div className="edu-item right">
          <div className="edu-content">
            <h3 className="edu-degree">Bachelor of Technology (B.Tech)</h3>
            <p className="edu-field">Information Technology</p>
            <p className="edu-year">2020 - 2024</p>
            <p className="edu-college">Velalar College of Engineering and Technology</p>
            <p className="edu-college">Percentage - 8.15 CGPA*</p>
          </div>
        </div>

        {/* 2 — LEFT SIDE */}
        <div className="edu-item left">
          <div className="edu-content">
            <h3 className="edu-degree">Mother's Matric Higher Secondary School</h3>
            <p className="edu-field">Computer Science Group</p>
            <p className="edu-year">2019 - 2020</p>
            <p className="edu-college">Percentage - 62.8%</p>
          </div>
        </div>

        {/* 3 — RIGHT SIDE */}
        <div className="edu-item right">
          <div className="edu-content">
            <h3 className="edu-degree">Mother's Matric Higher Secondary School</h3>
            <p className="edu-field">SSLC</p>
            <p className="edu-year">2017 - 2018</p>
            <p className="edu-college">Percentage - 90.8%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
