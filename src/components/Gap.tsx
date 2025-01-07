import React, { FC, useEffect, useRef } from 'react'
import { useDrop } from 'react-dnd'
import c from 'classnames'
export const Gap: FC = () => {
  const ref = useRef(null)
    const [{ isOver }, drop] = useDrop(() => {
      return {
        accept: 'new-item',
        item: {},
        collect: (monitor) => ({
          isOver: monitor.isOver()
        })
      }
    })
  
    const cs = c(
      "h-10",
      isOver ? 'bg-red-300' : ''
    )
  
    useEffect(() => {
      drop(ref)
    }, [])
    
    return <div ref={ref} className={cs}></div>
}
