import "./Home.css";
import myImage from "../../assets/image.png"; // ← correct path

const Home = () => {
  return (
    <section id="home" className="home-section">
      
      {/* LEFT SIDE TEXT */}
      <div className="home-left">
        <h2 className="home-title">Welcome to My Portfolio</h2>
        <h3>
          I'm <span className="highlight"> V Srisabarish</span> <br />
          Software Developer
        </h3>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="home-right">
        <img src={myImage} alt="Profile" className="home-img" />
      </div>

    </section>
  );
};

export default Home;


