import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import ThemeContext from './ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Header />
        <Home/>
      </ThemeContext>
    </div>
  );
}

export default App;
