import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Head from './Head';
import Slider from './Slider';
import Content from './Content';
import Test from './Test';
import T from './T';
import Inc from './Inc';
import UseRef from './UseRef';
// import Parent from './forword/Parent';
import Parent from './props/Parent';
function App() {
  return (
    <div className="App">
      {/* <Inc/> */}
      {/* <UseRef /> */}
      <Parent/>
      {/* <Test/> */}
      {/* <T/> */}
      {/* <Head />
      <Slider />
      <Content/> */}
    </div>
  );
}

export default App;
