import React, { useState } from 'react';

interface IProps {
  state: IState,
  setState: Function,
}

interface IState {
  currentQuantity: number,
  dateBurning: string,
  forBurningQuantity: number,
  typeBonusName: string,
}

const Main = (props: IProps) => {
  const state = props.state;
  const date = new Date(state.dateBurning);

  const [time, setTime] = useState(new Date());

  const diffTime = () => {
    setTimeout(() => {
      const curentTime = time.toLocaleString('en-US', { minute: 'numeric' });
      const newTime = (new Date()).toLocaleString('en-US', { minute: 'numeric' });
      if (curentTime !== newTime) {
        setTime(new Date());
        return;
      };
      diffTime();
    }, 1000);
  };

  const day = String(date.getDate()).length === 1 ? `0${date.getDate()}` : date.getDate();
  const month = String(date.getMonth() + 1).length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const timePmAm = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  diffTime();

  return (
    <div className="main">
      <div className='start_bar'>
        <div className='name'>Figma</div>
        <div className='time'>{timePmAm}</div>
        <div className='charger'>42%</div>
      </div>
      <div className='header'>
        <p className='text_logo'>ЛОГОТИП</p>
        <div className='information-button_1'></div>
      </div>
      <div className='block_bonus'>
        <div className='info_bonus' >
          <div className='count_bonus'>
            <p>{state.currentQuantity}</p>
            <p>бонусов</p>
          </div>
          <div className='description'>
            <p> {`${day}.${month}`} сгорит</p>
            <div className='icon_fire' ></div>
            <p>{state.forBurningQuantity}  бонусов</p>
          </div>
        </div>
        <div className='next'></div>
      </div>
      <div className='block_red'></div>
    </div>
  );
}

export default Main;
