import React, { useState } from 'react';


function App() {
  const myPassword = '3876';
  let initialPass = '';
  const audioElement = new Audio('sound/click.wav');
  const audioRemove = new Audio('sound/remove.wav');
  const audioSuccess = new Audio('sound/success.wav');
  const audioReject = new Audio('sound/reject.wav');
  let [password, setPassword] = useState('');

  const pin = (e) => {
    audioElement.play();
    document.querySelector('.message').classList.remove('wrong');
    document.querySelector('.message').classList.remove('welcome');
    document.querySelector('.message p').textContent = 'Enter your password!';
    initialPass += e.target.textContent.trim();
    switch (initialPass.length) {
      case 1: document.querySelector('.one').classList.add('visible');
        break;
      case 2: document.querySelector('.two').classList.add('visible');
        break;
      case 3: document.querySelector('.three').classList.add('visible');
        break;
      case 4: document.querySelector('.four').classList.add('visible');
        break;
      default: return false;
    }
    if (initialPass.length === 4) {
      setPassword(initialPass)
      checkPasssword();
    } else if (initialPass.length > 4) {
      return false;
    }
  }
  const deleteSymb = () => {
    audioRemove.play();
    initialPass = initialPass.slice(0, -1);
    switch (initialPass.length) {
      case 0:
        document.querySelector('.one').classList.remove('visible');
        break;
      case 1:
        document.querySelector('.two').classList.remove('visible');
        break;
      case 2:
        document.querySelector('.three').classList.remove('visible');
        break;
      default: return false;
    }
  }
  const changeHandler = (e) => { }
  const handlerDown = (e) => {
    e.target.style.border = '2px solid white';
    e.target.style.color = 'white';
  }
  const handlerUp = (e) => {
    e.target.style.border = '2px solid rgb(78,78,78)';
    e.target.style.color = 'rgb(78,78,78)';
  }


  const checkPasssword = () => {
    if (password === myPassword) {
      audioSuccess.play();
      document.querySelector('.message p').textContent = 'Welcome!';
      document.querySelector('.message').classList.remove('wrong');
      document.querySelectorAll('.round').forEach(e => {
        e.classList.remove('visible');
      })
      document.querySelector('.message').classList.add('welcome');
      document.querySelectorAll('.round-button').forEach(b => {
        b.setAttribute('disabled', 'disabled');
      })
    } else {
      audioReject.play();
      document.querySelector('.message p').textContent = 'Wrong!';
      document.querySelector('.message').classList.remove('welcome');
      document.querySelector('.message').classList.add('wrong');
      document.querySelectorAll('.round').forEach(e => {
        e.classList.remove('visible');
      })
    }

  }


  if (password.length === 4) {
    checkPasssword();
  }

  return (
    <div className="app">
      <div className="input-pin">
        <input type="password" value={password} onChange={changeHandler} hidden />
      </div>
      <div className="code">
        <button className="round one" disabled></button>
        <button className="round two" disabled></button>
        <button className="round three" disabled></button>
        <button className="round four" disabled></button>
      </div>
      <div className="message">
        <p>Enter the password</p>
      </div>
      <div className="numbers">
        <div className='range'>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>1 </button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>2 </button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>3</button>
        </div>
        <div className='range'>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>4</button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>5</button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>6</button>
        </div>
        <div className='range'>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>7</button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>8</button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>9</button>
        </div>
        <div className='range'>
          <button className="round-button hidden" disabled><span></span></button>
          <button className="round-button" onClick={pin} onMouseDown={handlerDown} onMouseUp={handlerUp}>0</button>
          <button className="round-button" onClick={deleteSymb} onMouseDown={handlerDown} onMouseUp={handlerUp}>&#9754;</button>
        </div>
      </div>
    </div >
  );
}

export default App;
