import './App.css';

//import Front from './Front';
//import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main';
import Showdata from './Showdata';
import Delete from './Delete';

function App() {
  return (
    <div>
    <Main />
    <Showdata />
     <Delete/>
    </div>
  );
}

export default App;
