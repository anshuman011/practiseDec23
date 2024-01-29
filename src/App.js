import './App.css';
import { ParentToAccessChildStateAndFunctionsUsingCallBacks } from './REACT/HooksPractiseJan/OtherPractiseHooks/ParentAccessChildUsingCallbacks/ParentToAccessChildStateAndFunctionsUsingCallBacks';
import { UseImeperativeHandleParent } from './REACT/HooksPractiseJan/UseImperativeHandle/UseImperativeHandleParent';
import { SomeCoolEffects1 } from './SassFiles/somecooleffects';


// import './JAVASCRIPT/javascriptINTERVIEWAskedProgrammingQuestions';
// import './JAVASCRIPT/jsSelfPractisePrograms';
// import './JAVASCRIPT/async/JsPromises';


function App() {
  return (
    <div className='App'>
      {/* <SomeCoolEffects1/> */}
      <ParentToAccessChildStateAndFunctionsUsingCallBacks/>
      <UseImeperativeHandleParent/>
    </div>
  );
}

export default App;
