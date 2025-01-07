import React, { FC} from 'react'
import c from 'classnames'
import { Gap } from './Gap.tsx'
import { Item } from './Item.tsx'

interface ListProps {
  className?: string | string[]
}
export const List: FC<ListProps> = (props) => {
  const { className } = props
  const cs = c('h-full', className)
  return (
    <div className={cs}>
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
    </div>
  )
}

// function Gap () {
//   const ref = useRef(null)
//   const [{ isOver }, drop] = useDrop(() => {
//     return {
//       accept: 'new-item',
//       item: {},
//       collect: (monitor) => ({
//         isOver: monitor.isOver()
//       })
//     }
//   })

//   const cs = c(
//     "h-10",
//     isOver ? 'bg-red-300' : ''
//   )

//   useEffect(() => {
//     drop(ref)
//   }, [])
  
//   return <div ref={ref} className={cs}></div>
// }

// function Item() {
//   const ref = useRef(null)
//   const [{ dragging }, drag] = useDrag(() => {
//     return {
//       type: 'list-item',
//       item: {},
//       collect: (monitor) => ({
//         dragging: monitor.isDragging()
//       })
//     }
//   })

//   useEffect(() => {
//     drag(ref)
//   }, [])

//   return (<div className={c(
//             "h-100 border-2 border-black bg-blue-300 p-10",
//             "flex justify-start items-center",
//             "text-xl tracking-wide",
//             dragging ? "border-dashed bg-white" : ""
//           )}
//           ref={ref}
//         >
//           <input type='checkbox' className='mr-2 w-40 h-40'/>
//           <p>代办事项</p>
//         </div>)
// }