import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import './WorkExperience.scss';
import Dxc from '../../assets/work-experience/dxc.png';
import PreventSolutions from '../../assets/work-experience/prevent-solutions.png';
import Sofrecom from '../../assets/work-experience/sofrecom.png';
import FirstItem from '../../assets/work-experience/time-line/first-item.png';
import Item from '../../assets/work-experience/time-line/item.png';
import { Col, Container, Row } from 'react-bootstrap';

function WorkExperience() {
    return (
        <section className='sectionWorkExp'>
            <h2>WORK EXPERIENCES</h2>
            <Container fluid>
                <Row>
                    <Col className='sectionWorkExp--workExpContainer'>
                        <p>2017 - 2019</p>
                        <img src={FirstItem} alt='linea de tiempo' className='timeLine'/>
                        <div className='sectionWorkExp--workExpContainer__logo'  >
                            <FaMapPin color='white' className='pin'/>
                            <img src={PreventSolutions} alt="Prevent Solution S.A." width='120px'/>
                        </div>
                        <div className='sectionWorkExp--workExpContainer__title'>
                            <FaMapPin color='#537895'/>
                            <h3>Prevent Solution S.A.</h3>
                        </div>
                        <h4>SUPPORT OF NETWORK SYSTEMS - HELP DESK -  APPLICATION SUPPORT</h4>
                        <button>DETAILS</button>
                    </Col>
                    <Col className='sectionWorkExp--workExpContainer'>
                        <p>2019 - 2021</p>
                        <img src={Item} alt='linea de tiempo' className='timeLine'/>
                        <div className='sectionWorkExp--workExpContainer__logo'>
                            <FaMapPin color='white' className='pin'/>
                            <img src={Sofrecom} alt="Sofrecom Argentina S.A." width='120px'/>
                        </div>
                        <div className='sectionWorkExp--workExpContainer__title'>
                            <FaMapPin color='#537895'/>
                            <h3>Sofrecom Argentina S.A.</h3>
                        </div>
                        <h4>SYSTEM ANALYST AT TELECOM</h4>
                        <button>DETAILS</button>
                    </Col>
                    <Col className='sectionWorkExp--workExpContainer'>
                        <p>2021 - Present</p>
                        <img src={Item} alt='linea de tiempo' className='timeLine'/>
                        <div className='sectionWorkExp--workExpContainer__logo'>
                            <FaMapPin color='white' className='pin'/>
                            <img src={Dxc} alt="DXC Technology" width='120px'/>
                        </div>
                        <div className='sectionWorkExp--workExpContainer__title'>
                            <FaMapPin color='#537895'/>
                            <h3>DXC Technology</h3>
                        </div>
                        <h4>UNIX LINUX SYSTEM ADMINISTRATOR</h4>
                        <button>DETAILS</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WorkExperience
