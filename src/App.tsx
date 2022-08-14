import { memo, useEffect } from 'react'
import { TodoList, todoSelectors, ITodo, todoActions } from '@features/todos'
import { ITheme, uiSelectors } from '@features/ui';
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@components/global';
import TodoListComponent from '@components/todos/TodoList';
import { useDispatch } from 'react-redux';
import { StoreDispatch } from './store';

function App() {
  const dispatch: StoreDispatch = useDispatch();

  // INFO: Redux todo features
  const todos: TodoList = useSelector(todoSelectors.getTodoList);
  const isLoading: boolean = useSelector(todoSelectors.getIsLoading);

  useEffect(()=> {
    dispatch(todoActions.loadTodos());
  }, []);

  // INFO: Redux ui features
  const theme: ITheme = useSelector(uiSelectors.getTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <TodoListComponent todos={todos} isLoading={isLoading} />
      </div>
    </ThemeProvider>
  )
}

export default memo(App)
