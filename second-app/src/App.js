import './App.css';

function App() {

let data = [];

  fetch('http://localhost:8000/counter/')
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => data =response);






 function updateCounter(id) {
  console.log(data,'data');
   //console.log(data[0].length, 'length');

  for(var i = 0; i<data[0].length ; i++) {
    if(data[0][i].id === id){
      data[0][i].value++;
      break;
    }
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
     
    <button 
      onClick={() => updateCounter(1)}
    >
      Second
    </button>
    </div>
  );
}

export default App;
