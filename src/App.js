// import logo from './logo.svg';
import './App.css';
import OneRepeatedTask from './OneRepeatedTask';
import { TwoStopWatch, ObjectIterationsPractise, ArrayIterationsPractise } from './Two';

function App() {
  return (
    <div style={{backgroundColor:"green", textAlign:"center"}}>
      <OneRepeatedTask /> 
      <TwoStopWatch />
      <ObjectIterationsPractise />
      <ArrayIterationsPractise />
      <img src='/images/image_from_public_folder.jpg' alt= "image_from_public_folder" style={{height:"100px", width :"100px"}}/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
