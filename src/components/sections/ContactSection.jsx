import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
export default function ContactSection() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation") || "—"}`;
    window.location.href = `mailto:info@casdi.org?subject=${encodeURIComponent("Website inquiry from " + data.get("name"))}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <section className="section-shell contact-section"><div><p className="eyebrow">CONTACT CASDI</p><h1>Good things start<br /><em>with a conversation.</em></h1><p>Connect with us about partnerships, community projects, volunteering or media inquiries.</p><a className="text-link" href="mailto:info@casdi.org"><Mail size={20} /> info@casdi.org</a><p className="contact-note">This form prepares an email in your email app. You can review it before sending.</p></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="contact-name">Full name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Your full name" /><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /><label htmlFor="contact-organisation">Organisation <span>(optional)</span></label><input id="contact-organisation" name="organisation" autoComplete="organization" placeholder="Your organisation" /><label htmlFor="contact-message">How can we work together?</label><textarea id="contact-message" name="message" rows={5} required placeholder="Tell us a little about your idea…" /><button className="button button-green" type="submit">Prepare email <ArrowUpRight size={18} /></button>{prepared && <p role="status">Your email is ready to open in your email app. If it did not open, email info@casdi.org directly.</p>}</form></section>;
}
