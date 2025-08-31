import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome';
import Student from './Component/Student';
import Employee from './Component/Employee'
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';
import Assignment3 from './Component/Assignment3/Assignment3';
function App() {
  return (
   <div className="app-container">
      <h1 className="main-heading">Assignment-2 To Do App</h1>
      <div className="row">
        {/* <ClassComponent />
        <FunctionalComponent /> */}
        <Assignment3/>
      </div>
    </div>
  );
}

export default App;
