import { pricingPlans } from '../../../data/pricing'
import { PricingCard } from './PricingCard'
import './Pricing.scss'

/** "Listino Prezzi" section — website-creation service plans. */
const Pricing = () => {
    return (
        <section id="pricing" className="section pricing">
            <div className="pricing__header">
                <h2>Listino Prezzi</h2>
                <p>Soluzioni di creazione siti web su misura per ogni esigenza.</p>
            </div>

            <div className="pricing__grid">
                {pricingPlans.map(plan => (
                    <PricingCard key={plan.name} plan={plan} />
                ))}
            </div>
        </section>
    )
}

export default Pricing
