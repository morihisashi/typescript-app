import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

export function Footer(props: string[]){
    return (
        <div className={"position"}>
            <Link to="/" className={"text"}>{props[0][0]}</Link>
            <Link to="/about" className={"text"}>{props[0][1]}</Link>
            <Link to="/practical" className={"text"}>{props[0][2]}</Link>
        </div>
    );
}