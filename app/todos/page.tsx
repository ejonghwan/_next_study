import { title } from "@/components/primitives";
import TodosTable from '@/components/todos/TodosTable';



const getTodos = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/todos/`)
	
	if(!res.ok) console.error('error??')
	return res.json();
}


export default async function TodosPage() {

	const res = await getTodos();
	return (
		<div>
			<h1 className={title()}>todos Page</h1>
			<TodosTable todos={res.data ?? []}/>
		</div>
	);
}
