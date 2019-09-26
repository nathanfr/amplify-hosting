import React from 'react';

// Custom Styling
import './Bootstrap.css'

const Bootstrap = (props) => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron text-center bg-dark text-white">
                    <h1 className="display-1">Hello World</h1>
                    <p className="lead">Get Stronger with Milo</p>
                    <p>Milo connects you with the best strength coaches in the world. Their expertise enables you to confidently make progress.</p>
                    <a className="btn btn-lg btn-block btn-primary" href="#">Get Started</a>
                </div>
            </div>

            <div className="container">
                <div className="jumbotron text-center">
                    <h1 className="display-1">Hello World</h1>
                    <p className="lead">Get Stronger with Milo</p>
                    <p>Milo connects you with the best strength coaches in the world. Their expertise enables you to confidently make progress.</p>
                    <a className="btn btn-lg btn-block btn-primary" href="#">Get Started</a>
                </div>
            </div>

            <div id="hero" className="jumbotron fluid-jumbotron text-center text-white">
                <div className="container">
                    <h1 className="display-1">Hello World</h1>
                    <p className="lead">Get Stronger with Milo</p>
                    <p>Milo connects you with the best strength coaches in the world. Their expertise enables you to confidently make progress.</p>
                    <a className="btn btn-lg btn-block btn-primary" href="#">Get Started</a>
                </div>
            </div>
        </div>
    )
};

export default Bootstrap;