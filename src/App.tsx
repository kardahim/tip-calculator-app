import React from 'react'

// assets
import './app.scss'
import logo from './assets/logo.svg'

// components
import Input from './components/Input'
import Tips from './components/Tips'
import Output from './components/Output'

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
          <Tips
            title='Select Tip %' />
          <Input
            title="Number of People"
            icon='person'
            error="Can't be zero"
            type="int" />
        </div>
        <div className='display card'>
          <Output
            title='Tip Amount'
            result={0.0} />
          <Output
            title='Total'
            result={0.0} />
          <button>reset</button>
        </div>
      </main >
    </div >
  );
}

export default App;
