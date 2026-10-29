/**
 * Smooth-scrolls the viewport to the section whose element id matches `id`.
 * Used by the navbar and any in-page CTA to drive anchor navigation
 * without changing route or reloading the page.
 */
export function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

/** Ordered list of the page sections, shared by the navbar and the layout. */
export const sections = [
    { id: 'home', label: 'Home' },
    // { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    // { id: 'pricing', label: 'Prices' },
    { id: 'contact', label: 'Contact' },
] as const
