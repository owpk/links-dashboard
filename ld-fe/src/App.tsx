import { RecoilRoot } from 'recoil';
import './App.css';
import { LinksBlock } from './components/ButtonsBlock';
import { ClockWidget } from './components/ClockWidget';
import { Column } from './components/Column';
import { Header } from './components/Header';
import { Widget } from './components/Widget';

function App() {

  return (
    <RecoilRoot>
      <div className='App mainFont'>
        <div className='container'>
          <Header />
          <div className='row g-5'>
            <Column children={
              [
                <Widget embed={LinksBlock} title={'Links 0'} />,
                <Widget embed={ClockWidget} title={'Clock'} />,
              ]
            } colType='col-auto' />

            <Column children={
              [
                <Widget embed={LinksBlock} title={'Links 0'} />,
              ]
            } colType='col-auto' />

            <Column children={
              [
                <Widget embed={LinksBlock} title={'Links 0'} />,
              ]
            } colType='col' />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
