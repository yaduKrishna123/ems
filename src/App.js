import { Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Edit from './Pages/Edit/Edit'
import Register from './Pages/Register/Register'
import Pagenotfound from './Pages/pagenotfound/Pagenotfound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
<Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/profile/:id' element={<Profile/>} />
<Route path='/edit/:id' element={<Edit/>} />
<Route path='/register'element={<Register/>} />
<Route path='*' element={<Pagenotfound/>}/>
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
