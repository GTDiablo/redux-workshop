import { memo } from "react";
//
import { ITodo } from "@features/todos";
//
import { StyledCheckbox, StyledColum, StyledComment, StyledTitle, StyledWrapper } from "./TodoListItem.elements";

export type TodoListItemProps = ITodo;

const TodoListItem = ({id, title, isCompleted, comment = 'No comment'}: TodoListItemProps) => {
    return (
        <StyledWrapper>
            <StyledColum>
                <StyledTitle>{title}</StyledTitle>
                <StyledComment>{comment}</StyledComment>
            </StyledColum>
            <StyledCheckbox checked={isCompleted}/>
        </StyledWrapper>
    );
}

export default memo(TodoListItem);