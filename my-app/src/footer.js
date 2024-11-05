import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts.css';
import tgIcons from'./tgIcons.svg'

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
                <div class="footer-logo">SAMURO<br />STUDIO</div>
            </div>
        </div>
    )
}

export default Footer;