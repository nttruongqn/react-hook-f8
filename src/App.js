import './App.css';
import { useCallback, useState } from 'react';
import Content from './Content';
import ContentCallback from './ContentCallback';

// 1.Memo() => Higher Order Component
// 2.useCallback ()

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleWithUseCallbackIncrease = useCallback (() => {
    setCount(prevCount => prevCount + 1);
  }, [])

  return (
    <>
    <div style={{padding: '10px 32px'}}>
      <Content/>
      <h1>{count}</h1>
      <button onClick= {handleIncrease}> Click </button> 
      <ContentCallback onIncrease={handleWithUseCallbackIncrease}  />

    </div>
    </>
  )
}

export default App;
