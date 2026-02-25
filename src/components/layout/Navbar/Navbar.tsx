import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const links = [
        { label: 'Home', to: '/home' },
        { label: 'Projects', to: '/projects' },
        { label: 'Contact', to: '/contact' },
        { label: 'About', to: '/about' },
    ]

    return (
        <nav>
            {links.map(link => (
                <button
                    key={link.to}
                    onClick={() => navigate(link.to)}
                    className={location.pathname === link.to ? 'active' : ''}
                >
                    {link.label}
                </button>
            ))}
        </nav>
    )
}

export default Navbar