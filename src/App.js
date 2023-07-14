import { useContext } from 'react';
import './App.css';
import { StoreContext, actions, useStore } from './store';

function App() {

  const [state, dispactch] = useStore()
  const { todos, todoInput } = state

  console.log(state)
  const handleAddTodo = () => {
    dispactch(actions.addTodo(todoInput))
  }

  return (
    <div style={{padding: '20px'}}>
      <input type="text" value={todoInput} placeholder='Enter todo...' onChange={e => { dispactch(actions.setTodoInput(e.target.value)) }} />
      <br />
      <button onClick={handleAddTodo}>Add</button>

      {
        todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))
      }
    </div>
  );
}

export default App;
