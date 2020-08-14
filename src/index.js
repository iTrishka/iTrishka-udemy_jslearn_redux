import {createStore} from 'redux';

// редюсер
const reducer = (state=0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

//  создаем хранилище
const store = createStore(reducer);

//  функции action-creator
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const reset = (value) => ({type: 'RESET', value});


//  Проверяем нажатия кнопок
document.getElementById('ink').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('reset').addEventListener('click', () => {
  store.dispatch(reset());
});

//  функция обновляет counter
const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

// при каждом изменении
store.subscribe(update);

