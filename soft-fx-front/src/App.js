import './App.css';
import {useRef} from 'react';

async function CalculateAsync(){
  var jsonData = {};
  jsonData = Math.floor(Math.random() * 100);
  var response = await fetch('http://localhost:5000/api/numbers/calculate', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
  })
}

async function GetSummAsync(){
  var response = await fetch('http://localhost:5000/api/numbers/summ')
  var summ = (await response.json());
  return summ;
}

function App() {
  const delayRef = useRef(null);
  var isStopped = true;

  const wait  = () => {
    var delay = delayRef.current.value;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  const setStateTrue  = () => {
    isStopped = true;
  };

  const setStateFalse  = () => {
    isStopped = false;
  };

  const handleClick = async (event) => {  
    event.preventDefault();
    while(true){
      await wait();
      await CalculateAsync();  
      if (isStopped == true)
      {
        break;
      }
    }
  }

  const checkSumm = async (event) => {
    var summ = await GetSummAsync();
    document.getElementById("resultSumm").textContent=summ;
  }

  return (
    <div className="text-center">        
        <main className="form-signin">
            <div className="container">
                <form onSubmit={handleClick}>
                  <h1 className="header h3 mb-3 fw-normal header _anim-items">Введите задержку в миллисекундах:</h1>
                  <div id="input"className="input-group">
                    <input ref={delayRef} type="number" className="form-control" placeholder="Задержка"
                     name="delay" min="1" max="1000000"/>
                    <div className="input-group-append">
                      <button onClick={(e) => setStateFalse()} className="btn btn-outline-secondary" type="submit">Старт</button>
                      <button onClick={(e) => setStateTrue()} className="btn btn-outline-secondary" type="button">Стоп</button>
                    </div>
                  </div>
                  <button onClick={checkSumm} id="summBtn" className="btn btn-outline-primary" type="button">Вывести сумму</button>
                  
                </form>
                <div>
                    <a id="resultSumm">
                    </a>
                </div>
          </div>          
        </main>
    </div>    

  );
}

export default App;
