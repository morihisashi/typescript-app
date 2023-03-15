import React from 'react';
import header from './header.css';
import { Link } from "react-router-dom";

export function Header(props: string[]){
    return (
        <div className={header.atag}>
            <p>headerコンポーネントの作成</p>
            <Link to="/" className={header.atag}>{props[0][0]}</Link>
            <Link to="/list">todoの一覧へ</Link>
            <Link to="/about" className={header.atag}>{props[0][1]}</Link>
            <Link to="/practical" className={header.atag}>{props[0][2]}</Link>
            <Link to="/practicallist">Practical List</Link>
        </div>
    );
}