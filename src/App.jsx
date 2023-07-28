import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Blog from './components/pages/Blog/Blog';
import Home from './components/pages/Home/Home';
import Order from './components/pages/Order/Order';
import Regulations from './components/pages/Regulations/Regulations';
import { getCoins } from './store/Slises/coinsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  return (
    <div className={s.app}>
      <Header/>
      <main className={s.main}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='regulations' element={<Regulations/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
