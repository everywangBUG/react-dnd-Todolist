import React, { FC } from 'react'
import c from 'classnames'

interface NewItemProps {
  className?: string | string[]
}

export const NewItem: FC<NewItemProps> = (props) => {
  const { className } = props

  const cs = c('h-200 border-2 border-black', className)
  
  return (
    <div className={cs}>NewItem</div>
  )
}
