import logo from './logo.svg';
import './App.css';
import CustomAlert from './Components/Alert.jsx';
import MyBook from './Components/SingleBook';
import GetComments from './Components/Comment';


function App() {
  return (
    <>
    <GetComments/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <CustomAlert/>
          <MyBook/>
      </header>
    </div>
    </>);
}

export default App;
