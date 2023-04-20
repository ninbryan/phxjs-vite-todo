import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <header class="flex">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>

      <h1 class="flex-1 text-center">Hello Vite!</h1>
      
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </header>

    
    <div id="todo-app">
      ...
    </div>

  </div>
`;

window.setTimeout(() => {
  setupApp(document.querySelector('#todo-app'));
}, 1000);

function setupApp(todoAppElement) {
  todoAppElement.innerHTML = `
    <form>
      <div class="flex">
        <label class="flex-1" for="textInput">Add TODO</label>
        <div id="count">...</div>
      </div>
      <input id="textInput" type="text" name="todoText">
    </form>

    <ul>
      <li>
        <input type="checkbox">
        <span>default task</span>
        <button>x</button>
      </li>
      <li>
        <input type="checkbox">
        <span>default task</span>
        <button>x</button>
      </li>
      <li>
        <input type="checkbox">
        <span>default task</span>
        <button>x</button>
      </li>
    </ul>
`;
}
