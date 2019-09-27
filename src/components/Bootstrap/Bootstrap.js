import React from 'react';

// Custom Styling
import './Bootstrap.css'

const Bootstrap = (props) => {
    return (
        <div className="my-auto row h-100">

            <div className="container text-white my-auto" id="onboardform">
                <h1>Get Stronger With Milo</h1>
                <p>Milo connects you with the best strength coaches in the world. Their expertise enables you to confidently reach your potential.</p>

                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" id="signupemail"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id="signuppassword"></input>
                    </div>
                    <button type="button" className="btn btn-block btn-primary">Sign Up</button>
                </form>
            </div>

        </div>
    )
};

export default Bootstrap;