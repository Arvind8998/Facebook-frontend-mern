import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widget';
import { useStateValue } from './StateProvider';
import Login from './Components/Login';

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
      { 
      user ? (
        <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      </>
      ): (<Login />)
      }
    </div>
  );
}

export default App;
