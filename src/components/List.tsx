import React, { FC} from 'react'
import { useTransition, animated } from '@react-spring/web'
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
  const transitions = useTransition(list, {
    from: { transform: 'translate3d(100%,0,0)', opacity: 0},
    enter: { transform: 'translate3d(0,0,0)', opacity: 1},
    leave: { transform: 'translate3d(-100%,0,0)', opacity: 0},
    keys: list.map(item => item.id),
    config: {
      mass: 1,
      tension: 200,
      friction: 30
    }
  })
  return (
    <div className={cs}>
      {
        list.length
        ?
        transitions((style, item) => (
          <animated.div style={style}>
              <Gap id={item.id} />
              <Item data={item} />
            </animated.div>
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
