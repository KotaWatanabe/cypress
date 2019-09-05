import TodoApp from "../components/TodoApp";

export const filterTodos = (filter, todos) => filter 
? todos.filter(todo => todo.isComplete === (filter === 'completed'))
: todos
