import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/images/casdi-logo.png";
import { organisation } from "../../data/organisation.js";
import OrganisationDetails from "../ui/OrganisationDetails.jsx";
import SocialLinks from "../ui/SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="CASDI home"><img src={logo} alt="CASDI" /></Link>
          <p>{organisation.name}</p>
          <p>Working together for a just, resilient and climate-conscious Nigeria.</p>
          <OrganisationDetails />
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/about">Who we are</Link>
          <Link to="/work">Our work</Link>
          <Link to="/projects">Our team</Link>
          <Link to="/resources">Resources & media</Link>
        </div>
        <div>
          <h2>Take action</h2>
          <Link to="/get-involved">Volunteer</Link>
          <Link to="/get-involved?tab=partner">Partner with us</Link>
          <Link to="/get-involved?tab=donates">Support our work</Link>
        </div>
        <div>
          <h2>Let’s connect</h2>
          <Link to="/contact">Contact CASDI <ArrowUpRight size={15} /></Link>
          <a href={`mailto:${organisation.email}`}>{organisation.email}</a>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} CASDI. All rights reserved.</span><span>Rooted in community. Growing together.</span></div>
    </footer>
  );
}
