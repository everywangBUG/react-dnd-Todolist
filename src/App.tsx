import React from 'react'
import './App.css'

export const Container: React.FC = () => {
  return (
    <div className='container'></div>
  )
}

export const Box: React.FC = () => {
  return (
    <div className='box'></div>
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
