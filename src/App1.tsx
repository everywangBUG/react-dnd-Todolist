import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App1.css';
import { useDrag, useDrop } from 'react-dnd';

interface CardProps {
  data: CardItem
  swapCard: (index1: number, index2: number) => void
  index: number
}

interface DragData {
  id: number
  index: number
}


interface CardItem {
  id: number
  content: string
}

const cardListArr = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
]
const Card: React.Fc<CardProps> = (props: CardProps ) => {
  const { data, swapCard, index } = props;
  const cardRef = useRef<HTMLDivElement>(null)

  const [{ dragging }, drag] = useDrag({
    type: 'card',
    item: {
      id: data.id,
      index
    },
    collect: (monitor) => ({
      dragging: monitor.isDragging()
    })
  })

  const [, drop] =useDrop({
    accept: 'card',
    hover: (item: DragData) => {
      swapCard(item.index, index)
      item.index = index
    }
  })

  useEffect(() => {
    drag(cardRef)
    drop(cardRef)
  })
 

  return (
      <div className={dragging ? 'dragging card-item' : 'card-item'} key={data.id} ref={cardRef}>{data.content}</div>
  )
}

export const App1: React.FC = () => {
  const [cardList, setCardList] = useState(cardListArr)

  const swapCard = useCallback((index1: number, index2: number) => {
    const temp = cardList[index1]
    cardList[index1] = cardList[index2]
    cardList[index2] = temp
    setCardList([...cardList])
  }, [])

  return (
    <div className="card-list">
      {
        cardList.map((card: CardItem, index: number) => (
          <Card data={card} key={card.id} index={index} swapCard={swapCard}/>
        ))
      }
    </div>
  )
}
