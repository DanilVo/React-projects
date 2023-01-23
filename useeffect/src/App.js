import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  // useEffect(() => {
  //   console.log('useeffect render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log("ComponentDidMount");

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
    window.removeEventListener('mousemove', mouseMoveHandler)

    }
}, [])

  return (
    <div className="App">
      <h1>resurse: {type}</h1>

      <button onClick={() => setType('users')}>users</button>
      <button onClick={() => setType('todos')}>todos</button>
      <button onClick={() => setType('posts')}>posts</button>
      <button onClick={() => setType('photos')}>photos</button>

      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <pre>{JSON.stringify(pos,null,2)}</pre>
    </div>
  );
}

export default App;
