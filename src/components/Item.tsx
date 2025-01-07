import React, { FC, useEffect, useRef } from 'react'
import { useDrag } from 'react-dnd'
import c from 'classnames'

export const Item: FC = () => {
  const ref = useRef(null)
    const [{ dragging }, drag] = useDrag(() => {
      return {
        type: 'list-item',
        item: {},
        collect: (monitor) => ({
          dragging: monitor.isDragging()
        })
      }
    })
  
    useEffect(() => {
      drag(ref)
    }, [])
  
    return (<div className={c(
              "h-100 border-2 border-black bg-blue-300 p-10",
              "flex justify-start items-center",
              "text-xl tracking-wide",
              dragging ? "border-dashed bg-white" : ""
            )}
            ref={ref}
          >
            <input type='checkbox' className='mr-2 w-40 h-40'/>
            <p>代办事项</p>
          </div>)
}
