import React, { FC } from 'react'
import c from 'classnames'

interface ListProps {
  className?: string | string[]
}
export const List: FC<ListProps> = (props) => {
  const { className } = props
  const cs = c('h-full border-2 border-black', className)
  return (
    <div className={cs}>List</div>
  )
}
