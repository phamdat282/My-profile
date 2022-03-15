import { motion } from 'framer-motion'
import React, { Component } from 'react'

export default class Skills extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <motion.div className='container' initial="out" animate="in" exit="out" variants={this.props.pageTransition}>
          <div className='card-box'>
            <div className="section-title">
              <h2>Skills</h2>
              <div className='title-border'></div>
              <p>Knowledge of HTML,CSS,JS and know the basics of ReactJS </p>
            </div>
            <div className='skill'>
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="num">
                    <h2>70<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">HTML</h2>
              </div>
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="num">
                    <h2>70<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">CSS</h2>
              </div>
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="num">
                    <h2>50<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Javascript</h2>
              </div>
            </div>
      </div>
    </motion.div>
    )
  }
}
