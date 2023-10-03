import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <select>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Chanel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select><br/>

        <input type="text" placeholder='linea 1' /><br/>
        <input type="text" placeholder='linea 2'/><br/>
        <button>Exportar</button>

        <div className='meme' id='meme'>
          <span></span><br/>
          <span></span>
          <img src=''  alt={}/>
        </div>
      </div>
  );
}

export default App;
