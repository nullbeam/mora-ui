import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { UserProvider } from './context/user-context';
import Windows10 from './screens/Windows10';
import store from './stores/store';
import './styles/global.css';
// import './styles/tailwind.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <UserProvider>
        <Provider store={store}>
          <Windows10 />
        </Provider>
      </UserProvider>
    </React.StrictMode>
  );
}