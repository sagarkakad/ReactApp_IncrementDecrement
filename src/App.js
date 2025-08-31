import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';
function App() {
  return (
   <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="row">
        <ClassComponent />
        <FunctionalComponent />
        {/* <Assignment3/> */}
      </div>
    </div>
  );
}

export default App;
