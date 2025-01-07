import React, { FC } from 'react'
import c from 'classnames'

interface ListProps {
  className?: string | string[]
}
export const List: FC<ListProps> = (props) => {
  const { className } = props
  const cs = c('h-full', className)
  return (
    <div className={cs}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}


function Item() {
  return (<div className={c("h-100 border-2 border-black bg-blue-300 mb-10 p-10",
        "flex justify-start items-center",
        "text-xl tracking-wide")}
        >
          <input type='checkbox' className='mr-2 w-40 h-40'/>
          <p>代办事项</p>
        </div>)
}