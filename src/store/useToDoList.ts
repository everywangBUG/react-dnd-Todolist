import { create, StateCreator } from "zustand"
import { persist } from 'zustand/middleware'

export interface ListItem {
  id: string
  status: 'todo' | 'done'
  content: string
}

type State = {
  list: ListItem[]
}

type Action = {
  addItem: (item: ListItem, id: string) => void
  deleteItem: (id: string) => void
  updateItem: (updateItem: ListItem) => void
}

const stateCreator: StateCreator<State & Action> = ((set) => ({
  list: [],
  addItem: (item: ListItem, id: string) => {
    set((state) => {
      if (!id) {
        return {
          list: [
            ...state.list,
            item
          ]
        }
      }
      const newList = [
        ...state.list
      ]
      const index = newList.findIndex((item) => item.id === id)
      newList.splice(index, 0, item)
      return {
        list: newList
      }
      // return {
      //   list: [
      //     ...state.list,
      //     item
      //   ]
      // }
    })
  },
  deleteItem: (id: string) => {
    set((state) => {
      return {
        list: state.list.filter((item) => item.id !== id)
      }
    })
  },
  updateItem: (updateItem: ListItem) => {
    set((state) => {
      return {
        list: state.list.map((item) => {
          if (item.id === updateItem.id) {
            return updateItem
          }
          return item
        })
      }
    })
  }
}))

export const useToDoList = create<State & Action>()(persist(stateCreator, { name: 'todo-list' }))