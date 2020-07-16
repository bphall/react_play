import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Room() {
const [isLit, setLit] = React.useState(true)
const [tempCurr, setTemp] = React.useState(72)
const brightness = isLit ? 'lit' : 'dark';

  return (
    <div className={`room ${brightness}`}>
    the room is {isLit ? 'lit' : 'dark'}
    <br />
    the temperature is {tempCurr}
    <br/>
    <button onClick={() => setLit(!isLit)}>
      flip
    </button>
    <div>
      <button onClick={() => setLit(true)}>
        ON
      </button>
      <button onClick={() => setLit(false)}>
        OFF
      </button>
    </div>
    increase/decrease temp:
    <br/>
    <button onClick={() => setTemp(tempCurr + 1)}>
      +
    </button>
    <button onClick={() => setTemp(tempCurr - 1)}>
      -
    </button>
    </div>
  );
}

ReactDOM.render(
<Room />,
  document.getElementById('root')
);