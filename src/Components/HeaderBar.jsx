import React from 'react';
import './header-bar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const HeaderBar = (props) => {
    return (
        <div className="header-bar" style={props.giveStyle}>

            <ul style={props.giveColor}>
                    <li>
                        <Link to="/home" className="link" style={props.giveStyle}>Recent News</Link>
                    </li>
                    <li>
                        <Link to="business-news" className="link" style={props.giveStyle}>Business News</Link>
                    </li>
                    <li>
                        <Link to="tech-news" className="link" style={props.giveStyle}>Tech News</Link>
                    </li>
                    <li>
                        <Link to="wall-street" className="link" style={props.giveStyle}>Wall Street</Link>
                    </li>
                    <i class="fas fa-bars" onClick={props.enableMenu}></i>
            </ul>

            <div className="mode-parent">
                <FontAwesomeIcon icon={props.mode} className="mode-icon" onClick={props.switchMode}  style={props.giveStyle} />
                <p>{props.modeName}</p>
            </div>

        </div>
    );
};

export default HeaderBar;