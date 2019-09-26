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
                    <form>
                        <div className="form-group">
                            <label for="loginemail" className="form-label">Email Address</label>
                            <input type="email" id="loginemail" placeholder="Enter your Email" className="form-control form-control"></input>
                        </div>

                        <div className="form-group">
                            <label for="loginpassword" className="form-label">Password</label>
                            <input type="password" id="loginpassword" placeholder="Password" className="form-control"></input>
                            <small className="text-white">Password must be cool</small>
                        </div>

                        <div className="form-group">
                            <label for="loginselect">Multi Select</label>
                            <select multiple id="loginselect" className="form-control">
                                <option>Op 1</option>
                                <option>Op 2</option>
                                <option>Op 3</option>
                                <option>Op 4</option>
                            </select>
                            <small className="text-white">Select them all</small>
                        </div>

                        <div className="form-group">
                            <label for="logintext" className="form-label">Text Area</label>
                            <textarea id="logintext" className="form-control" rows="5"></textarea>
                            <small className="text-white">Password must be cool</small>
                        </div>

                        <div className="form-group">
                            <label for="loginfile" className="form-label">File Upload</label>
                            <input type="file" className="form-control-file" id="loginfile"></input>
                        </div>

                        <div className="form-group">
                            <label for="loginrange" className="form-label">Range</label>
                            <input type="range" className="form-control-range" id="loginrange"></input>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default Bootstrap;