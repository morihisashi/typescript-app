import {React, useState, useEffect }from 'react';
import '../App.css';

export function PracticalList(){
    const text: string | null = sessionStorage.getItem('text')!;
    const todoDate: string | null = sessionStorage.getItem('date')!;
    const [array, setArray]= useState(text.split(','));
    const [date, setDate]= useState(todoDate.split(','));

    const onClickDelArray = (val: string, key: number) => {
        setArray(
            array.filter((del) => (del !== val))
        );
        setDate(
            date.filter((delDate) => (delDate !== date[key]))
        );
    }

    useEffect(() => {
        sessionStorage['text'] = array;
        sessionStorage['date'] = date;
    },[array])

    return ( text !== "" ?
        <div className={"App"}>
            <h1>ToDo List</h1>
            <div className={"list"}>
                {array.map((val, key) => 
                <div>
                    <p>期限：{date[key]}</p>
                    <div className={"listItmes"}>{val}</div>
                    <button onClick={() => onClickDelArray(val, key)}>削除</button>
                </div>
                )}
            </div>
        </div>
        :<div>登録データがありません。</div>
    );
}