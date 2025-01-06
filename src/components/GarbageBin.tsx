import React, { FC } from 'react'
import c from 'classnames'

interface ToDoListProps {
  className?: string | string[]
}

export const GarbageBin: FC<ToDoListProps> = (props) => {
  const { className } = props
  const cs = c('border-2 border-black flex-1 mt-2', className)
  return (
    <div className={cs}>GarbageBin</div>
  )
}
