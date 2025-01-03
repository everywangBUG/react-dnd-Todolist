import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
import { App1 } from './App1.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DndProvider backend={HTML5Backend}>
    <App1 />
  </DndProvider>
);
