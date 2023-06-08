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
      <Tesbacon/>
      <CTA />
      <Blog />
      <CTA />
      <Features />
      <Possibility />
      <Footer />
    </div>
  )
}

export default App