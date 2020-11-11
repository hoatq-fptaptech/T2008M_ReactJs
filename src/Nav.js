import React from 'react';
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="section nav">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/detail">Detail</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}