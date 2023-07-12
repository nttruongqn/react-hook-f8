import logo from './logo.svg';
import './App.css';
import { useMemo, useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, {
      name, price: +price
    }])

    setName('')
    setPrice('')
    nameRef.current.focus()

  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('tinh toan lai')
      return result + prod.price
    }, 0)

    return result;
  }, [products])

  return (
    <div style={{ margin: '20px' }}>
      <input type="text" value={name} placeholder='Enter name' onChange={e => setName(e.target.value)} ref={nameRef} />
      <br />
      <input type="text" value={price} placeholder='Enter price' onChange={e => setPrice(e.target.value)} />
      <br />
      <button onClick={handleSubmit}> Add </button>
      <br />
      Total: {total}
      <br />
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
