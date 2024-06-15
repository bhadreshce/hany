import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Contact1 from './Contact1';
import Contact2 from './Contact2';
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}>
            <Route path='/contact/contact1' element={<Contact1 />}
            ></Route>
              <Route path='/contact/contact2' element={<Contact2        />}
            ></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
