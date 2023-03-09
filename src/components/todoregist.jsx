import { React, useState, useEffect } from 'react';
import '../App.css';

export function TodoRegist(){
    const [text, setText] = useState("");
    const [addText, setAddText] = useState([]);
    const [temporaryText, setTemporaryText] = useState([]);
    const [date, setDate] = useState("");
    const [temporaryDate, setTemporaryDate] = useState([]);
    const [addDate, setAddDate] = useState([]);

    const onClickAddText = () => {
        setTemporaryText([...temporaryText, text]);
        setText("");
        setTemporaryDate([...temporaryDate, date]);
        setDate("");
    }

    const onClickRegistText = () => {
        setAddText([...addText, temporaryText]);
        setAddDate([...addDate, temporaryDate]);
    }
    
    useEffect(() => {
        const sessionText = sessionStorage.getItem('todoText');
        const sessionDate = sessionStorage.getItem('todoDate');
        if(sessionText){
            const arrayText = sessionText.split(',');
            setAddText(arrayText);
        } else {
            sessionStorage['todoText'] = "";
        }
        if(sessionDate){
            const arrayDate = sessionDate.split(',');
            setAddDate(arrayDate);
        } else {
            sessionStorage['todoDate'] = "";
        }
    },[]);

    useEffect(() => {
        sessionStorage['todoText'] = addText;
        sessionStorage['todoDate'] = addDate;
    },[addText, addDate])

    return (
        <div className={"App"}>
            <p>期限：<input type="date" onChange={(e) => setDate(e.target.value)}></input></p>
            <div>
            <textarea 
                className={"textarea"}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            </div>
            <button onClick={() => onClickAddText()}>一時保存へ追加</button>
            <p>一時保存されているtodoList</p>
            {temporaryText.map((val, key) => <p>{temporaryDate[key]} : {val}</p>)}
            <button onClick={() => onClickRegistText()}>登録</button>
        </div>
    );
}