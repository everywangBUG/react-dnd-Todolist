import React, { FC, Fragment} from 'react'
import c from 'classnames'
import { Gap } from './Gap.tsx'
import { Item } from './Item.tsx'
import { useToDoList } from '../store/useToDoList.ts'

interface ListProps {
  className?: string | string[]
}
export const List: FC<ListProps> = (props) => {
  const { className } = props
  const cs = c('h-full', className)
  const list = useToDoList((state) => state.list)
  return (
    <div className={cs}>
      {
        list.length
        ?
        list.map((item) => (
          <Fragment key={item.id}>
              <Gap id={item.id}/>
              <Item data={item} />
            </Fragment>
          ))
        :
        <div className='text-center h-full text-2xl flex justify-center items-center flex-col'>
          <span>暂无待办事项</span>
          <Gap className='w-full' />
        </div>
      }
    </div>
  )
}
