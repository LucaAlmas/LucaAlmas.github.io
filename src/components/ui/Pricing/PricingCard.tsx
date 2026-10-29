import type { PricingPlan } from '../../../types'
import { scrollToSection } from '../../../utils/scroll'

interface PricingCardProps {
    plan: PricingPlan
}

/** A single, self-contained pricing plan card. Reusable on its own. */
export const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <div className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
            {plan.featured && <span className="pricing-card__badge">Più scelto</span>}

            <header className="pricing-card__header">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__tagline">{plan.tagline}</p>
            </header>

            <div className="pricing-card__price">{plan.price}</div>
            <p className="pricing-card__description">{plan.description}</p>

            <ul className="pricing-card__features">
                {plan.features.map(feature => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>

            <button
                className="pricing-card__cta"
                onClick={() => scrollToSection('contact')}
            >
                {plan.ctaLabel ?? 'Richiedi un preventivo'}
            </button>
        </div>
    )
}
