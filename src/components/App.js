import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Weather from './Weather';
import { Provider } from 'react-redux';
import store from '../redux/store';



function App() {
  
  
  return (
    <Provider store={store}>
      <div>
        <Weather/>
      </div>
    </Provider>
  );
}

export default App;