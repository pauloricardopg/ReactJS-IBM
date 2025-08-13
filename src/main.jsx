import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Disponibiliza o Redux para toda a aplicação
import store from './store.js'; // Nossa store configurada com cartReducer
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider envolve a aplicação para que todos os componentes tenham acesso ao estado Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
