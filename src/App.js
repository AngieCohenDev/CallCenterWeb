import React from 'react'

import { Blog, Header, Footer, Features, Possibility, Tesbacon } from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='back'>
          <Navbar />
          <Header />
      </div>
      <Brand />
      <Tesbacon/>
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App