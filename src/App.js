import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommend from './Recommend';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app-page'>
        <Sidebar/>
        <Recommend/>
      </div>
    </div>
  );
}

export default App;
