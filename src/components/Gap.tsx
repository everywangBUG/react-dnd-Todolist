import React, { FC, useEffect, useRef } from 'react'
import { useDrop } from 'react-dnd'
import c from 'classnames'
import { useToDoList } from '../store/useToDoList.ts'

interface GapProps {
  className?: string | string[]
  id?: string
}

export const Gap: FC<GapProps> = (props) => {
  const { className, id } = props
  const addItem = useToDoList((state) => state.addItem)
  const ref = useRef(null)
    const [{ isOver }, drop] = useDrop(() => {
      return {
        accept: 'new-item',
        item: {},
        drop: () => {
          addItem({
            id: Math.random().toString().slice(2, 8),
            status: 'todo',
            content: '新的待办事项'
          }, id)
        },
        collect: (monitor) => ({
          isOver: monitor.isOver()
        })
      }
    })
  
    const cs = c(
      "h-10",
      className,
      isOver ? 'bg-red-300' : ''
    )
  
    useEffect(() => {
      drop(ref)
    }, [])
    
    return <div ref={ref} className={cs}></div>
}
