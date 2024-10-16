import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Header } from './components/Header';
import { LinksWidget } from './components/LinksWidget';

function App() {

  const [isDarkTheme, setDarkTheme] = useState(() =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.style.colorScheme = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme])

  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <div className="Col-container">

          <div className="Col-sm">
            <LinksWidget request="buttons" title={'Links 0'} />
            <LinksWidget request="buttons" title={'Links 0'} />
          </div>

          <div className="Col-lg">
            <LinksWidget request="buttons" title={'Links 0'} />
          </div>

          <div className="Col-sm">
            <LinksWidget request="buttons" title={'Links 0'} />
          </div>

        </div>
      </div>

    </RecoilRoot>
  );
}

export default App;
