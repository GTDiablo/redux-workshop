import { ITodo, TodoList } from '@features/todos'
import { memo } from 'react'
//
import TodoListItem from '../TodoListItem'
import { StyledWrapper } from './TodoList.elements';

export interface TodoListProps {
    todos: TodoList;
    isLoading: boolean;
}

function TodoListComponent({todos, isLoading}: TodoListProps) {
  return (
    <StyledWrapper>
        { isLoading && (<p>Loading...</p>) }
        { !isLoading && todos.map((todo: ITodo) => (
            <TodoListItem key={`todo-${todo.id}`} {...todo} />
        )) }
    </StyledWrapper>
  )
}

export default memo(TodoListComponent)
