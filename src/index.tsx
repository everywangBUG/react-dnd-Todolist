import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

console.log(document.getElementById('root'), 'placeholder')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
