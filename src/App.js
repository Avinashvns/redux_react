import logo from './logo.svg';
import './App.css';
import MyCounter from './redux page/count';
import Book from './redux page/Book';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Welcome</h1>
      <br />
      <MyCounter />
      <br />
      <Book />
    </div>
  );
}

export default App;
