import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css'


// function Room() {
// const [isLit, setLit] = React.useState(true)
// const [tempCurr, setTemp] = React.useState(72)
// const brightness = isLit ? 'lit' : 'dark';

//   return (
//     <div className={`room ${brightness}`}>
//     the room is {isLit ? 'lit' : 'dark'}
//     <br />
//     the temperature is {tempCurr}
//     <br/>
//     <button onClick={() => setLit(!isLit)}>
//       flip
//     </button>
//     <div>
//       <button onClick={() => setLit(true)}>
//         ON
//       </button>
//       <button onClick={() => setLit(false)}>
//         OFF
//       </button>
//     </div>
//     increase/decrease temp:
//     <br/>
//     <button onClick={() => setTemp(tempCurr + 1)}>
//       +
//     </button>
//     <button onClick={() => setTemp(tempCurr - 1)}>
//       -
//     </button>
//     </div>
//   );
// }


function App () {
const [currNumber, addNumber] = React.useState(0)

  return (
  <div>
  <button onClick={() => addNumber(currNumber + 1)}>
      add one
  </button>
  <button onClick={() => addNumber(currNumber - 1)}>
      minus one
  </button>
  <br/>
      {currNumber}
  <br/>
  <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
    </form>
  </div>
  
  );
}

ReactDOM.render(
<App />,
  document.getElementById('root')
);