"use client"

import React, { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Todo } from '@/types/index';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';


const TodosTable = ({ todos }: { todos: Todo[] }) => {

  const [text, setText] = useState('');

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setText(target.value)
  }

  const handleTodoSubmit = async () => {
    console.log('handle submit?')
    
    const res = await fetch(`${process.env.BASE_URL}/api/todos/`, { method: "POST", body: { title: text, isDone: false } })

    console.log(res.json());
  }

  return (
    <div>
      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>아이디</TableColumn>
          <TableColumn>할일내용</TableColumn>
          <TableColumn>완료여부</TableColumn>
          <TableColumn>생성일</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'데이터가 없습니다.'}>
          {todos && todos.map((todo: Todo) => (
            <TableRow key={todo.id}>
              <TableCell title={todo.id}>{todo.id.slice(0, 3)}...</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.is_done === false ? 'no!': 'yes'}</TableCell>
              <TableCell>{`${todo.created_at}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <br /><br />
        <Input 
          attr={{
            type: "text",
            placeholder: "할일입력",
            value: text,
          }}
          handleInputChange={handleInputChange}
        />
        <Button 
          attr={{
            type: 'button',
            style: { border: '1px solid #ddd', padding: "5px 10px", borderRadius: "14px" },
          }}
          content="할일 입력"
          onClick={handleTodoSubmit}
        />
        {text}
      </div>
    </div>
    
  );
}


export default TodosTable;