"use client"

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Todo } from '@/types/index';

const TodosTable = ({ todos }: { todos: Todo[] }) => {


	console.log('todos?', todos[1].created_at)

  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>아이디</TableColumn>
        <TableColumn>할일내용</TableColumn>
        <TableColumn>완료여부</TableColumn>
        <TableColumn>생성일</TableColumn>
      </TableHeader>
      <TableBody>
		{todos && todos.map((todo: Todo) => (
			 <TableRow key={todo.id}>
				<TableCell>{todo.id}</TableCell>
				<TableCell>{todo.title}</TableCell>
				<TableCell>{todo.is_done === false ? 'no!': 'yes'}</TableCell>
				<TableCell>{`${todo.created_at}`}</TableCell>
			</TableRow>
		))}
      </TableBody>
    </Table>
  );
}


export default TodosTable;