import React from 'react'
import Navigation from '../components/Navigation'

const Contact = () => {
    return (
        <section>
            <h1 className='header'>Contact Me</h1>
            <Navigation />
            <aside class="cards-wrap">
                <ul class="contact_info">
                    <li>spencerjpross@gmail.com</li>
                    <li>641-751-3685</li>
                    <li>
                        <a href="https://www.instagram.com/spencerjpross/" target="_blank">Instagram</a>
                    </li>
                </ul>
            </aside>
        </section>
    )
}

export default Contact