import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PhotoCarousel from "./PhotoCarousel.jsx";
export default function ResourcesSection() {
  return <><section className="section-shell resources-intro"><p className="eyebrow">RESOURCES & MEDIA</p><h1>Ideas, experiences<br />and community stories.</h1><p>Explore the people and activities behind CASDI’s work, and connect with us for learning resources on climate action and community organising.</p><div className="resource-grid"><article id="publications"><h2>Publications & toolkits</h2><p>For available guides, reports and resources on climate adaptation, clean environments and community organising, get in touch with our team.</p><Link className="text-link" to="/contact">Request resources <ArrowUpRight size={18} /></Link></article><article><h2>Our activities & impact</h2><p>Learn about our climate education, grassroots leadership and community resilience initiatives.</p><Link className="text-link" to="/work-programs">Explore our programs <ArrowUpRight size={18} /></Link></article></div></section><div id="gallery"><PhotoCarousel /></div></>;
}
