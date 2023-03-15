import React from 'react';
import footer = require('./footer.css');
import { Link } from "react-router-dom";

export function Footer(props: string[]){
    return (
        <div className={footer.position}>
            <Link to="/" className={footer.text}>{props[0][0]}</Link>
            <Link to="/about" className={footer.text}>{props[0][1]}</Link>
            <Link to="/practical" className={footer.text}>{props[0][2]}</Link>
        </div>
    );
}