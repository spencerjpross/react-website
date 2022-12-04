import React from 'react'
import Navigation from '../components/Navigation'

const About = () => {
    return (
        <section>
            <h1 className='header'>About Me</h1>
            <Navigation />
            <div class="cards-wrap">
                <ul class="about_info">
                    <li>Born in Seoul, South Korea and then was adopted to Iowa when I was 6 months old</li>
                    <li>Grew up on a farm raising corn, beans and pigs</li>
                    <li>Went to the University of Northern Iowa and graduated with a B.S. in Marketing and Advertising</li>
                    <li>Worked as a Sales Account Executive for a tech company for 3 years in Des Moines after university</li>
                    <li>Taught English for 3 years in Madrid, Spain and still miss Spain to this day</li>
                    <li>Currently a Sr. Business Development Representative at Guild Education</li>
                </ul>
            </div>
        </section>
    )
}

export default About