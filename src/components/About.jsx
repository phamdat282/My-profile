import logo from '../images/anhlogo.jpg'
import React from 'react'
import { motion } from 'framer-motion'


export default function About(props) {
  return (
    <motion.div className='container' initial="out" animate="in" exit="out" variants={props.pageTransition}>
        <div className='card-box'>
            <div className='about'>
                <div className='header-about'>
                    <img src={logo} />
                    <h2>{props.data.name}</h2>
                    <p>{props.data.desc}</p>
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
                </div>
                <div className="text-about">
                    <div className='textLeft-about'>
                        <h4>Personal Details</h4>
                        <p>Hello, My name is Dat. I'm 23 year old. I'm living in Ha Noi, i was born in Thai Binh. My major is computer science at HaNoi University of industry. My dream will to become a fontend developer. I will try to make my dream come true</p>
                    </div>
                    <div className='textRight-about'>
                        <ul>
                            <li><i class="fas fa-user-circle"></i> <b>Name: </b>{props.data.name}</li>
                            <li><i class="fas fa-mobile-alt"></i> <b>Phone: </b>{props.data.phone}</li>
                            <li><i class="fas fa-envelope"></i> <b>Email: </b>{props.data.email}</li>
                            <li><i class="fas fa-gift"></i> <b>Date of Birth: </b>{props.data.dob}</li>
                            <li><i class="fas fa-map-marker-alt"></i> <b>Address: </b>{props.data.address}</li>
                            <li><i class="fas fa-book"></i> <b>Languages: </b>{props.data.lang}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
