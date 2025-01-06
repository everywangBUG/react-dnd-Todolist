import React from 'react'
import { NewItem } from '../components/NewItem.tsx'
import { List } from '../components/List.tsx'
import { GarbageBin } from '../components/GarbageBin.tsx'

export const ToDoList = () => {
  return (
    <div
      className="w-1000 h-600 border-black border-2 m-2 p-2 flex justify-center items-center"
    >
      <div
        className="flex-2 h-full overflow-auto"
      >
        <List />
      </div>

      <div
        className="flex-1 h-full overflow-auto ml-2 flex flex-col justify-between" 
      >
        <NewItem />
        <GarbageBin />
      </div>
    </div>
  )
}
