import React from 'react';
import { Body } from '../components/body';
import { TodoRegist } from '../components/todoregist';
import '../App.css';

export function Homepage(){
  
  return (
    <div>
      <Body title="ToDo app" name="登録画面" />
      <TodoRegist />
    </div>
  );
}
