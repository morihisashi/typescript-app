import React from 'react';
import '../App.css';
export function Notpage(props: {title: string}){
  return (
    <div className={"App"}>
      <p>{props.title}</p>
    </div>
  );
}