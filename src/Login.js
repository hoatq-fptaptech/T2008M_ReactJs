import React from "react";
export default function Login() {
    return (
        <section className="section">
            <div className="container">
                <form action="#" method="post">
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="pwd" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger">Login</button>
                    </div>
                </form>
            </div>
        </section>
    )
}