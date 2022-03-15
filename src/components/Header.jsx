import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

  return (
    <header>
        <div className='container'>
            <nav class="navbar navbar-expand-lg">
                <div className='logo'>
                    <a class="" href="#">My <span>Profile</span></a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="nav navbar-nav">
                        <Link to ='/'>
                          <a class="nav-item nav-link" href="">About</a>
                        </Link>
                        <Link to = '/skills'>
                           <a class="nav-item nav-link" href="">Skills</a>                        
                        </Link>
                        <Link to= '/education'>
                            <a class="nav-item nav-link" href="">Education</a>
                        </Link>
                        <Link to='/experience'>
                           <a class="nav-item nav-link" href="">Experience</a>
                        </Link>
                        <Link to='/portfolio'>
                            <a class="nav-item nav-link" href="">Portfolio</a>
                        </Link>
                        <Link to='/contact'>
                            <a class="nav-item nav-link" href="">Contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}
