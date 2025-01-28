import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../footer/footer.css';
import '../assets/fonts.css';
import tgIcons from '../tgIcons.svg'

function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="footer-links">
                    <a href="#">Privacy policy</a>
                    <a href="#">Cookie policy</a>
                    <a href="#">Technical support</a>
                </div>
                <div class="social-icons">
                    <a href="#"><i class="icon-telegram"><img src={tgIcons} alt="tgIcons" /></i></a>
                </div>
                <button>
                    <Link to="" className='nav-link'>
                        <div class="footer-logo">SAMURO<br />STUDIO</div>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Footer;