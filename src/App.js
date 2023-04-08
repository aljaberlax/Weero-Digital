
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Navbar/Footer';

function App() {
  return (
    <div className='max-w-[1380px] mx-10 flex justify-center ' >
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/"></Route>
          <Route path="/" ></Route>
          <Route path="/" ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
