import React, { useRef } from 'react'
import './App.css'
import { useDrag, useDrop } from 'react-dnd'

export const Container: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  const [,drop] = useDrop(() => {
    return {
      accept: 'box',
      drop(item) {
        console.log(item)
      }
    }
  })

  drop(ref)
  
  return (
    <div className='container' ref={ref}></div>
  )
}

export const Box: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  const [, drag] = useDrag({
    type: 'box',
    item: {
      color: 'blue'
    },
  })

  drag(ref)

  return (
    <div className='box' ref={ref}></div>
  )
}


export const App: React.FC = () => {
  return (
    <>
      <Container />
      <Box />
    </>
  )
}
