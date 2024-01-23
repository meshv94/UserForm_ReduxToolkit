import './App.css';
import React from 'react';
import Form from './component/Form';
import { Provider } from 'react-redux';
import {store} from './redux/Store';

function App() {

  return (
    <>
      <Provider store={store}>
          <Form/>
      </Provider>
    </>
  );
}

export default App;
