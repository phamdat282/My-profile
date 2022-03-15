import { motion } from 'framer-motion'
import React, { Component } from 'react'

export default class Experience extends Component {
  constructor(props){
      super();
  }
  render() {
    return (
      <motion.div className="container" initial="out" animate="in" exit="out" variants={this.props.pageTransition}>
          <div className="card-box">
          <div className="section-title">
                        <h2>Experience</h2>
                        <div className='title-border'></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, et!</p>
                    </div>
                    <div className="time-line">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="icon"></div>
                                <div class="date-content">
                                    <div class="date-outer">
                                        <span class="date">
                                                <span class="month">2 Years</span>
                                        <span class="year">2020</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-content">
                                    <h5 class="title">Ha Noi university of industry</h5>
                                    <p class="description">
                                        Start learning about HTML,CSS,JS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
      </motion.div>
    )
  }
}
