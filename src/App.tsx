import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main'
import getInfo from './utilits';

interface IState {
  currentQuantity: number,
  dateBurning: string,
  forBurningQuantity: number,
  typeBonusName: string,
}

const App = () => {
  const iniState = {} as IState
  const [state, setState] = useState(iniState)

  useEffect(() => {
    const promis = new Promise<IState>((resolve, reject) => {
      const info = getInfo()
      resolve(info)
    })
    promis.then(res => setState(res))
  }, [])

  if (Object.keys(state).length === 0) {
    return null;
  }

  return (
    <div className="App">
      <Main state={state} setState={setState} />
    </div>
  );
}

export default App;
