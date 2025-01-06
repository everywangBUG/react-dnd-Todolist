import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
// import { App1 } from './App1.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToDoList } from './toDoList/ToDoList.tsx';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(React, 'React')
root.render(
  <DndProvider backend={HTML5Backend}>
    <ToDoList />
  </DndProvider>
);
