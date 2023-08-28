import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">

        <h2>Website Help</h2>
        <p>Website Help Website Help Website Help Website Help Website Help</p>
    
        <nav>
            <NavLink to="faq"> View the FAQ</NavLink>
            <NavLink to="contact"> Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}