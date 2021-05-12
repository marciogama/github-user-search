import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="main-nav">
        <div>
            <Link to="/" className="nav-logo-link">
                <h4 className="navbar-logo-text">Bootcamp DevSuperior</h4>
            </Link>

        </div>
    </nav>
);

export default Navbar;