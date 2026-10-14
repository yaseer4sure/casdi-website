import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/images/casdi-logo.png";
const items = [
  { label: "Who we are", path: "/about", children: [["About CASDI", "/about"], ["Our approach", "/about-history"], ["Our team", "/projects"]] },
  { label: "Our work", path: "/work", children: [["What we do", "/work"], ["Our programs", "/work-programs"], ["Our impact", "/work-projects"], ["Pipeline projects", "/work-research"]] },
  { label: "Resources & media", path: "/resources" }, { label: "Get involved", path: "/get-involved" }, { label: "Contact", path: "/contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const close = () => { setOpen(false); document.querySelectorAll(".site-header details[open]").forEach((detail) => detail.removeAttribute("open")); };
  return <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
    <a className="skip-link" href="#main-content">Skip to content</a><div className="nav-shell">
    <Link to="/" onClick={close} className="brand" aria-label="CASDI home"><img src={logo} alt="CASDI" /></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={`main-navigation ${open ? "is-open" : ""}`} aria-label="Main navigation">
    {items.map((item) => item.children ? <details className="nav-dropdown" key={item.path}><summary className={item.children.some(([, path]) => pathname === path) ? "active" : ""}>{item.label}<ChevronDown size={13} /></summary><div className="dropdown-panel">{item.children.map(([label, path]) => <NavLink key={path} to={path} onClick={close}>{label}</NavLink>)}</div></details> : <NavLink key={item.path} to={item.path} onClick={close}>{item.label}</NavLink>)}
    <Link className="button button-green nav-support" to="/get-involved" onClick={close}>Support our work <ArrowUpRight size={16} /></Link></nav></div></header>;
}
