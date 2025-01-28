import React from 'react';
import "./notFound.css"

function NotFound() {
    return(
        <div>
            <div className="error-content">
                <div className="error-left">
                    <img src="./img/notFoundPic.svg" alt="Page was not found"/>
                </div>
                <div className="error-right">
                    <div className="error-title">404</div>
                    <div className="error-subtitle">Sorry, samurai, page was not found</div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;