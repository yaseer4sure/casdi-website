import { ArrowUpRight } from "lucide-react";
import { organisation } from "../../data/organisation.js";

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="CASDI social media">
      {organisation.socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`CASDI on ${social.name} (opens in a new tab)`}>
          {social.name} <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
