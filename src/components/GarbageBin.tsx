import React, { FC, useEffect, useRef } from 'react'
import c from 'classnames'
import { useDrop } from 'react-dnd'
import { useToDoList } from '../store/useToDoList.ts'

interface GarbageBinProps {
  className?: string | string[]
}

export const GarbageBin: FC<GarbageBinProps> = (props) => {
  const { className } = props
  const ref = useRef(null)
  const deleteItem = useToDoList((state) => state.deleteItem)
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'list-item',
      drop(item: {id: string}) {
        deleteItem(item.id)
      },
      collect: (monitor) => {
        return {
          isOver: monitor.isOver()
        }
      }
    }
  })

  useEffect(() => {
    drop(ref)
  }, [])
  
  const cs = c(
              "border-2 border-black flex-1 mt-2",
              "bg-orange-300",
              "leading-200 text-center text-2xl",
              "cursor-move select-none",
              isOver ? 'border-dashed bg-yellow-300' : '',
               className)
  return (
    <div className={cs} ref={ref}>GarbageBin</div>
  )
}
