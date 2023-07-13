import './App.css';
import { useContext } from 'react';
import Paragraph from './Paragraph';
import { ThemeContext } from './ThemeContext';

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const context = useContext(ThemeContext)

  return (
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Paragraph/>
      </div>
  );
}
export default App
