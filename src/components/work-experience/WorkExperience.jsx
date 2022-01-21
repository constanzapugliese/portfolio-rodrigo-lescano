import React from 'react'
import { FaMapPin } from 'react-icons/fa';

function WorkExperience() {
    return (
        <section>
            <h2>Work Experience</h2>
            <div>
                <p>2017 - 2019</p>
                <img src="#" alt=""/>
                <FaMapPin />
                <h3>Prevent Solution S.A.</h3>
                <h4>Support of Network Systems - Help Desk - Application Support</h4>
                <button>Details</button>
            </div>
            <div>
                <p>2019 - 2021</p>
                <img src="#" alt=""/>
                <FaMapPin />
                <h3>Sofrecom Argentina S.A.</h3>
                <h4>System Analyst at Telecom</h4>
                <button>Details</button>
            </div>
            <div>
                <p>2021 - Present</p>
                <img src="#" alt=""/>
                <FaMapPin />
                <h3>DXC Technology</h3>
                <h4>Unix Linux System Administrator</h4>
                <button>Details</button>
            </div>
        </section>
    )
}

export default WorkExperience
