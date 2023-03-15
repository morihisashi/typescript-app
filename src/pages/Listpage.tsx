import {React, useState, useEffect }from 'react';
import '../App.css';

export function Listpage(){
    const text = sessionStorage.getItem('todoText');
    const todoDate = sessionStorage.getItem('todoDate');
    const [array, setArray]= useState(text.split(','));
    const [date, setDate]= useState(todoDate.split(','));

    const onClickDelArray = (key) => {
        setArray(
            array.filter((del) => (del !== array[key]))
        );
        setDate(
            date.filter((delDate) => (delDate !== date[key]))
        );
    }

    useEffect(() => {
        sessionStorage['todoText'] = array;
        sessionStorage['todoDate'] = date;
    },[array, date])

    return ( text !== "" ?
        <div className={"App"}>
            <h1>ToDo List</h1>
            <div className={"list"}>
                {array.map((val, key) => 
                <div>
                    <p>期限：{date[key]}</p>
                    <div className={"listItmes"}>{val}</div>
                    <button onClick={() => onClickDelArray(key)}>削除</button>
                </div>
                )}
            </div>
        </div>
        :<div>登録データがありません。</div>
    );
}