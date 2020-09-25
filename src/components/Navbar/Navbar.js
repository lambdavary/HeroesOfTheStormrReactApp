import React, { Component } from 'react';
import logo from '../../assets/logo.jpg';
import {Route, Link} from 'react-router-dom';
import Carausel from '../Carausel/Carausel';
import Heroes from '../Heroes/Heroes';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" width="25px" height="25px" className="rounded"></img>
                    </a>
                    <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#myNav">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><Link className="nav-link text-light" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/heroes">Heroes</Link></li>
                            <li className="nav-item"><a className="nav-link text-light" href="./contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <Route path="/" exact component={Carausel} />
                <Route path="/heroes" exact component={Heroes} />
            </div>
        )
    }
}
