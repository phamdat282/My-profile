import { motion } from 'framer-motion'
import React, { Component } from 'react';

class Education extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <motion.div className='container' initial="out" animate="in" exit="out" variants={this.props.pageTransition}>
                <div className='card-box'>
                    <div className="section-title">
                        <h2>Education</h2>
                        <div className='title-border'></div>
                        <p></p>
                    </div>
                    <div className="time-line">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">4 Years</span>
                                        <span class="year">2011</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">An My secondary school</h5>
                                    <p class="description">
                                        An My secondary school is located in An My - Quynh Phu - Thai Binh
                                    </p>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">3 Years</span>
                                        <span class="year">2015</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">Phu Duc high school</h5>
                                    <p class="description">
                                        Phu Duc high school is located in An Bai - Quynh Phu - Thai Binh
                                    </p>
                                </div>
                            </div>
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">4 Years</span>
                                        <span class="year">2018</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">Ha Noi university of industry</h5>
                                    <p class="description">
                                        298 Cau Dien Street, Bac Tu Liem District, Hanoi<br />
                
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default Education;