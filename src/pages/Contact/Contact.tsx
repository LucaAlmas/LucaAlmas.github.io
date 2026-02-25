import { useState } from 'react'
import * as React from "react";
import './Contact.scss';

export default function Contact() {
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const res = await fetch('https://formspree.io/f/TUO_ID', {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' },
        })

        if (res.ok) {
            setSent(true)
            form.reset()
        }
    }

    return (
        <div className="contact">
            {/*<h1></h1>*/}
            <a className="linkedin-link" href="https://www.linkedin.com/in/luca-almasio" target="_blank" rel="noopener noreferrer">
                Contattami su LinkedIn
            </a>

            {sent ? (
                <p className="success-message">Messaggio inviato! Ti risponderò presto.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Il tuo nome" required />
                    <input type="email" name="email" placeholder="La tua email" required />
                    <textarea name="message" placeholder="Messaggio" required />
                    <button type="submit">Invia</button>
                </form>
            )}
        </div>
    )
}