import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app'
 
//создаем хранилище, всегда остается в index.js
const store = createStore(reducer);


//Provider - чтобы использовать store в любом компоненте, ниже по иерархии
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));


