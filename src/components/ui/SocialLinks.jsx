import { organisation } from "../../data/organisation.js";

const icons = {
  TikTok: <path d="M16.6 0h-4.1v16.5a3.5 3.5 0 1 1-3-3.5V8.8a7.7 7.7 0 1 0 7.1 7.7V8.1a10 10 0 0 0 5.9 1.9V5.9A6 6 0 0 1 16.6 0Z" />,
  Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></>,
  Facebook: <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073Z" />,
  X: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />,
  LinkedIn: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0Z" />,
};

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="CASDI social media">
      {organisation.socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={`CASDI on ${social.name}`} aria-label={`CASDI on ${social.name} (opens in a new tab)`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">{icons[social.name]}</svg>
        </a>
      ))}
    </nav>
  );
}
