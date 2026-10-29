import type { PricingPlan } from '../types'

/** Service plans for the website-creation pricing section. */
export const pricingPlans: PricingPlan[] = [
    {
        name: 'Base',
        tagline: 'Landing Page',
        price: '€109',
        description: 'Sito vetrina di una pagina, ideale per presentarti online in modo essenziale.',
        features: [
            'Sito one-page',
            'Design responsive',
            'Form di contatto',
            'Ottimizzazione SEO base',
            'Online in 1 settimana',
        ],
    },
    {
        name: 'Business',
        tagline: 'Sito Multi-pagina',
        price: '€199',
        description: 'Sito completo per la tua attività, con più sezioni e contenuti personalizzati.',
        features: [
            'Fino a 5 pagine',
            'Design su misura',
            'Sezione blog / news',
            'SEO avanzata',
            'Integrazione social',
            'Supporto 30 giorni',
        ],
        featured: true,
    },
    {
        name: 'Premium',
        tagline: 'Soluzione su Misura',
        price: '€339',
        description: 'Progetto avanzato con e-commerce, area riservata e funzionalità custom.',
        features: [
            'Pagine illimitate',
            'E-commerce / area riservata',
            'CMS personalizzato',
            'Animazioni & UX avanzata',
            'Performance ottimizzata',
            'Supporto prioritario 90 giorni',
        ],
    },
]
