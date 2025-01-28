import React from 'react';
import Samurai from '../Frame.svg';
import "./logo_frame.css"

function logoFrame(){
    return (
        <section className="logo-frame">
            <img src={Samurai} alt="samuro" className="samuro-frame" />
            <div className="logo-textsec">
                <div className="logo-title">SAMURO STUDIO</div>
                <div className="logo-subtitle">We have a large selection of codes that will help you implement your
                    programs
                </div>
            </div>
        </section>
    )
}

export default logoFrame;