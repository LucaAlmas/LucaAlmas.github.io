import { useEffect, useState, type ReactNode } from 'react'
import { sections } from '../../../utils/scroll'
import './Navbar.scss'

const ICONS: Record<string, ReactNode> = {
    home: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V10.5z" />
        </svg>
    ),
    projects: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    // pricing: (
    //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    //         <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    //         <circle cx="7" cy="7" r="1" />
    //     </svg>
    // ),
    contact: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
}

const Navbar = () => {
    const [active, setActive] = useState<string>(sections[0].id)

    // Scroll-spy: highlight the icon of the section currently in view.
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        )

        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="icon-nav" aria-label="Primary">
            {sections.map(section => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`icon-nav__item${active === section.id ? ' is-active' : ''}`}
                    aria-label={section.label}
                    aria-current={active === section.id ? 'page' : undefined}
                >
                    <span className="icon-nav__icon" aria-hidden="true">
                        {ICONS[section.id]}
                    </span>
                    <span className="icon-nav__label">{section.label}</span>
                </a>
            ))}
        </nav>
    )
}

export default Navbar
