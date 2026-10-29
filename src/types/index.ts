export interface Project {
    id: number
    title: string
    description: string
    techStack: string[]
    githubUrl: string
    liveUrl?: string
    imageUrl?: string
}

export interface Skill {
    name: string
    category: 'frontend' | 'backend' | 'tools'
}

export interface PricingPlan {
    /** Plan identifier, also used as React key. */
    name: string
    /** Short tagline shown under the plan name. */
    tagline: string
    /** Display price, e.g. "€349". */
    price: string
    description: string
    features: string[]
    /** Marks the highlighted/recommended plan. */
    featured?: boolean
    ctaLabel?: string
}