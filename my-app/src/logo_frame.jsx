import React from 'react';
import Samurai from './Frame.svg';

function logoFrame(){
    return (
        <section className="logo-frame">
        <img src={Samurai} alt="samuro" className="samuro-frame" />
      </section>
    )
}

export default logoFrame;