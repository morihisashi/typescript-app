import React from 'react';
import './body.css';

export function Body(props: {title: string, name: string}){
    return (
        <div className={"Body"}>
            <body>
                <h1>{ props.title }</h1>
                <p>{ props.name }</p>
            </body>
        </div>
    );
}