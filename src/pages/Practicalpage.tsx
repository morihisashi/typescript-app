import React, { useState, useEffect } from 'react';
import { Body } from '../components/body';
import { SubmitHandler, useForm } from 'react-hook-form';
import '../App.css';

export function Practicalpage(){
    const [addDate, setAddDate] = useState<string[]>([]);
    const [addText, setAddText] = useState<string[]>([]);
    type ValuesType = {
        data: string[];
        date: string;
        text: string;
    }
    // 初期化
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ValuesType>();

    // フォーム送信ボタンを押された時の処理
    const onSubmit: SubmitHandler<ValuesType> = (data) => {
        setAddDate([...addDate, data['date']]);
        setAddText([...addText, data['text']]);
        reset();   // フォームに入力した値をリセット
    };

    useEffect(() => {
        const sessionText = sessionStorage.getItem('text');
        const sessionDate = sessionStorage.getItem('date');
        if(sessionText){
            const arrayText = sessionText.split(',');
            setAddText(arrayText);
        } else {
            sessionStorage['text'] = "";
        }
        if(sessionDate){
            const arrayDate = sessionDate.split(',');
            setAddDate(arrayDate);
        } else {
            sessionStorage['date'] = "";
        }
    },[]);

    useEffect(() => {
        sessionStorage['date'] = addDate;
        sessionStorage['text'] = addText;
    })

    return (
    <div className={"App"}>
        <Body title="Practical Pages" name="Practicalpageへ遷移" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="date" {...register('date', { required: '日付を入力してね' })} />
            <p>{errors.date?.message}</p> {/* エラー表示 */}
                <textarea className={"textarea"}
                    {...register('text', { required: 'やることを入力してね' })}
                />
            <p>{errors.text?.message}</p> {/* エラー表示 */}
            <input type="submit" value='保存' />
        </form>
    </div>
    );
}

