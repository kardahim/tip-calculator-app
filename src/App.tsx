import React from 'react'
import { useState } from 'react'

// assets
import './app.scss'
import logo from './assets/logo.svg'

// components
import Input from './components/Input'
import Tips from './components/Tips'
import Output from './components/Output'

function App() {
  const [tipAmount, setTipAmount] = useState(0.0)
  const [total, setTotal] = useState(0.0)

  // function for passing data from Tips component
  const passData = (tips: number, total: number) => {
    setTipAmount(tips)
    setTotal(total)
  }

  // reset function
  const reset = () => {
    // styles
    (document.getElementById('bill-error') as HTMLElement).style.visibility = 'hidden';
    (document.getElementById('person-error') as HTMLElement).style.visibility = 'hidden';

    (document.getElementById('bill-input') as HTMLInputElement).style.border = 'none';
    (document.getElementById('person-input') as HTMLInputElement).style.border = 'none';

    (document.getElementById('bill-input') as HTMLInputElement).value = '';
    (document.getElementById('person-input') as HTMLInputElement).value = '';
    (document.getElementById('custom-tip') as HTMLInputElement).value = '';

    passData(0, 0);
  }

  return (
    <div className="App">
      <header><img src={logo} alt='Logo' /></header>
      <main>
        <div className='options card'>
          <Input
            title="Bill"
            icon='dollar'
            error="Can't be zero"
            type="float"
            id='bill-input'
            error_id='bill-error' />
          <Tips
            title='Select Tip %'
            passData={passData} />
          <Input
            title="Number of People"
            icon='person'
            error="Can't be zero"
            type="int"
            id='person-input'
            error_id='person-error' />
        </div>
        <div className='display card'>
          <Output
            title='Tip Amount'
            result={tipAmount} />
          <Output
            title='Total'
            result={total} />
          <button onClick={() => { reset() }}>reset</button>
        </div>
      </main >
    </div >
  );
}

export default App;
