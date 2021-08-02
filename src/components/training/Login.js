  
import React from 'react';

let Login = () => {
    return (

        <div className="container">
            <div className="row">
                <form className="form form-group form-dark col-sm-6 mt-3">
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3 d-flex align-items-center">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login;
