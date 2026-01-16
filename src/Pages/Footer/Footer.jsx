import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} .</p>

      

      <div className="footer-socials">
    
     

      <a href="https://in.linkedin.com/in/srisabarish-v-49375b249?trk=people-guest_people_search-card" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://github.com/SrisabarishV" target="_blank">
          <i className="fab fa-github"></i>
        </a>

         <a href="https://www.hackerrank.com/profile/sabarishvelu4" target="_blank">
          <i className="fab fa-hackerrank"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
