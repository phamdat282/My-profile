import { motion } from 'framer-motion'
import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <motion.div className="container" initial="out" animate="in" exit="out" variants={this.props.pageTransition}>
          <div className="card-box">
            <div className="section-title">
                <h2>Contact</h2>
                <div className='title-border'></div>
            </div>
            <div className="contact">
              <form action="">
                <div className="inputBox">
                  <input type='text' placeholder='Name' required/>
                  <input type='number' placeholder='Phone' required/>
                  <input type='email' placeholder='Email' required/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
                <button type='submit'>Submit Now</button>
              </form>
              <div className="social-links">
                <ul>
                  <li>
                      <a href=""><i class="fab fa-facebook"></i></a>
                  </li>
                  <li>
                      <a href=""><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                      <a href=""><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                      <a href=""><i class="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>  
              </div>
              <p>© 2022.Design By Pham Tien Dat</p>
            </div>
          </div>
      </motion.div>
    )
  }
}
