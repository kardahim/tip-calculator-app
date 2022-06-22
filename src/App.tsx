import React from 'react'

// assets
import './app.scss'
import logo from './assets/logo.svg'

// components
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <header><img src={logo} alt='Logo' /></header>
      <main>
        <div className='options card'>
          <Input
            title="Bill"
            icon='dollar'
            error="Can't be zero"
            type="float" />
        </div>
        <div className='display card'></div>
      </main >
    </div >
  );
}

export default App;
