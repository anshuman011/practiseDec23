// import logo from './logo.svg';
import './App.css';
import OneRepeatedTask from './AllPractiseFiles/OneRepeatedTask';
import { Program1, Program2, Program3, Program5, Program6 } from './AllPractiseFiles/ReactInterviewQuestionsDec';
import { TwoStopWatch, ObjectIterationsPractise, ArrayIterationsPractise } from './AllPractiseFiles/Two';
import { SomeCoolEffects1 } from './AllPractiseFiles/somecooleffects';

function App() {
  return (
    <div>
      {/* <Program1 /> */}
      {/* <Program2 /> */}
      {/* <Program3 /> */}
      <Program5 />
      <Program6/>
      <SomeCoolEffects1 />
    </div>

    // <div style={{backgroundColor:"green", textAlign:"center"}}>
    //   <OneRepeatedTask /> 
    //   <TwoStopWatch />
    //   <ObjectIterationsPractise />
    //   <ArrayIterationsPractise />
    //   <img src='/images/image_from_public_folder.jpg' alt= "image_from_public_folder" style={{height:"100px", width :"100px"}}/>
    // </div>

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
