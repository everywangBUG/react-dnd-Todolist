import React, { useRef } from 'react'
import './App.css'
import { useDrag, useDragLayer, useDrop } from 'react-dnd'

interface ItemProps {
  color: string
}

export const Container = () => {
  const ref = useRef(null)
  const [boxes, setBoxes] = React.useState([])
  
  const [,drop] = useDrop(() => {
    return {
      accept: 'box',
      drop(item: ItemProps) {
        setBoxes((boxes) => [...boxes, item])
      }
    }
  })

  drop(ref)
  
  return (
    <div className='container' ref={ref}>
      {boxes.map((box, index) => (
        <Box key={index} color={box.color} />
      ))}
    </div>
  )
}

interface BoxProps {
  color: string
}

export const Box = (props: BoxProps) => {
  const ref = useRef(null)
  
  const { color } = props

  const [{dragging}, drag] = useDrag({
    type: 'box',
    item: {
      color
    },
    collect: (monitor) => ({
      dragging: monitor.isDragging()
    }) 
  })

  drag(ref)

  return (
    <div ref={ref} className={ dragging ? 'box dragging' : 'box'} style={{ backgroundColor: color || 'skyblue'}}></div>
  )
}

export const DragLayer = () => {
  const {isDragging, item, currentOffset} = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset()
  }))

  if (!isDragging) {
    return null
  }
  
  return (
    <div className='drag-layer' style={{ left: currentOffset?.x, top: currentOffset?.y }}>
      {item.color}111
    </div>
  )
}


export const App = () => {
  return (
    <>
      <Container />
      <Box color='skyblue '/>
      <Box color='red' />
      <Box color='green' />
      <Box color='pink' />
      <DragLayer />
    </>
  )
}
