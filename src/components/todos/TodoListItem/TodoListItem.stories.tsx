import { mockTodo } from '@features/todos';
import {Meta, Story} from '@storybook/react';
import TodoListItem, {TodoListItemProps} from './TodoListItem';

export default {
    name: 'Todos/TodoListItem',
    component: TodoListItem
} as Meta;

const Template: Story<TodoListItemProps> = (args) => <TodoListItem {...args} />

export const InCompleted = Template.bind({});
InCompleted.args = {
    ...mockTodo
}

export const Completed = Template.bind({});
Completed.args = {
    ...mockTodo,
    isCompleted: true,
}