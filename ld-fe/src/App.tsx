import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { ButtonBlock } from './components/ButtonsBlock';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <RecoilRoot>
      <div className='App'>
        <Navbar />
            <div className="container">
              <ButtonBlock />
            </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
