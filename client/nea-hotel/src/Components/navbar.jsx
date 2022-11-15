import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <div className="navbar-logo">
                <h2>NEA Hotel</h2>
            </div>
            <ul className="navbar-links">
                <li className="nav-link">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/stay">
                        Stay
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/gallery">
                        Gallery
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="navbar__auth">
                <button
                    className="btn btn--primary"
                    onClick={() => navigate("/login")}
                >
                    Book Now
                </button>
            </div>
        </nav>
    );
}