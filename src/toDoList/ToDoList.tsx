import React from 'react'

export const ToDoList = () => {
  return (
    <div
      className="w-1000 h-600 border-black border-2 m-2 p-2 flex justify-center items-center"
    >
      <div
        className="flex-2 h-full bg-sky-300 overflow-auto"
      ></div>

      <div
        className="flex-1 h-full bg-sky-200 overflow-auto ml-2"
      >
      </div>
    </div>
  )
}
