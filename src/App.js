import React from 'react'
import './App.css'
import Header from './Header'
import Alert from './Alert'
import Section from './Section'
import Footer from './Footer'

function App() {
  return (
    <div>
    <Header />
    <Alert />
    
    <Section title="iphone 12" className="first-highlight-wrapper" />
    <Section title="iphone 12 Pro" className="second-highlight-wrapper" />
    <Section title="Mac or Ipad" className="third-highlight-wrapper" />

    <Footer />
    
    </div>
  );
}

export default App;
