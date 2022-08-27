import logo from './logo.svg';
import './App.css';

function App() {

  fetch('http://localhost:8000/counter/1/')
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => console.log('Success:', JSON.stringify(response)));

 function updateCounter() {
  console.log('hellllooo');

  let data = { 
    "id": 10, 
    "title": "json-server is not bad. It's great!", 
    "author": "Dwight Shrute" 
  }
  
   fetch('http://localhost:8000/counter/', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
   },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', JSON.stringify(response)));
 }

  return (
    <div className="App">
     
    <button onClick={updateCounter}>
      First
    </button>
    </div>
  );
}

export default App;
