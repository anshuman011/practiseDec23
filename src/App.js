import './App.css';
import { ParentToAccessChildStateAndFunctionsUsingCallBacks } from './REACT/HooksPractiseJan/OtherPractiseHooks/ParentAccessChildUsingCallbacks/ParentToAccessChildStateAndFunctionsUsingCallBacks';
import { UseImeperativeHandleParent } from './REACT/HooksPractiseJan/UseImperativeHandle/UseImperativeHandleParent';
import { UseStateHook } from './REACT/HooksPractiseJan/UseState_UseReducer';
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
      <UseStateHook/>
    </div>
  );
}

export default App;
