import logo from './logo.svg';
import './App.css';
import axios from 'axios';




function App() {


  const onClickFunc = async() =>{
   const res = await axios.get('http://localhost:3000/')

   console.log("your res" , res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{width :"50%" ,height : "200px", backgroundColor:"red"}} onClick={ () =>{onClickFunc()}}>Text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
