import React, { FC, useEffect, useRef } from 'react'
import c from 'classnames'
import { useDrag } from 'react-dnd'

interface NewItemProps {
  className?: string | string[]
}

export const NewItem: FC<NewItemProps> = (props) => {
  const { className } = props
  const ref = useRef(null)

  const [{ dragging },drag] = useDrag(() => {
    return {
      type: 'new-item',
      item: {},
      collect: (monitor) => ({
        dragging: monitor.isDragging()
      })
    }
  })

  useEffect(() =>{
    drag(ref)
  }, [])

  const cs = c(
        "h-100 border-2 border-black",
        "leading-100 text-center text-2xl",
        "bg-green-300 flex justify-center items-center",
        "cursor-move select-none",
        dragging ? 'border-dashed bg-white' : '',
        className)
  
  return (
    <div className={cs} ref={ref}>新的待办事项</div>
  )
}
