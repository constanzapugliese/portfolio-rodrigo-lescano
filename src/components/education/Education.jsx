import React from 'react'
import { FaMapPin } from 'react-icons/fa';

function Education() {
    return (
        <section>
            <h2>Education</h2>
            <div>
                <p>year - year</p>
                <img src="#" alt=""/>
                <FaMapPin />
                <h3>Universidad de Buenos Aires</h3>
                <h4>Degree in Computer Science</h4>
            </div>
            <div>
                <p>2020 - 2021</p>
                <img src="#" alt=""/>
                <FaMapPin />
                <h3>CoderHouse</h3>
                <h4>
                    Information Technology<br/>
                    Full Stack Developer
                </h4>
            </div>
            <h2>Certifications</h2>
            <div>
                <img src="" alt="" />
                <h3>Cisco Certified Network Associate Security (CCNA)</h3>
                <p>Issuing authority: Cisco</p>
                <p>Issuing date: March 2019 (No expiration date)</p>
            </div>
        </section>
    )
}

export default Education
