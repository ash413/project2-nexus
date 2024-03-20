import React from 'react';
import './App.css';
import { Footer, Header, Navbar, Services, About, Prefooter, Technology } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Services />
      <Technology />
      <div className='gradient__pfg'>
        <Prefooter />
      </div>
      <Footer />
    </div>
  )
}

export default App