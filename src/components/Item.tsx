import React, { FC, useEffect, useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import c from 'classnames'
import { ListItem, useToDoList } from '../store/useToDoList.ts'

interface ItemProps {
  data: ListItem
}

export const Item: FC<ItemProps> = (props) => {
  const { id, status, content } = props.data
  const updateItem = useToDoList((state) => state.updateItem)
  const [editing, setEditing] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const ref = useRef(null)
    const [{ dragging }, drag] = useDrag(() => {
      return {
        type: 'list-item',
        item: {
          id
        },
        collect: (monitor) => ({
          dragging: monitor.isDragging()
        })
      }
    })
  
    useEffect(() => {
      drag(ref)
    }, [])
  
    return (<div className={c(
              "h-100 border-2 border-black bg-blue-300 p-10",
              "flex justify-start items-center",
              "text-xl tracking-wide",
              dragging ? "border-dashed bg-white" : ""
            )}
            ref={ref}
            onDoubleClick={() => setEditing(true)}
          >
            <input
              type="checkbox"
              className='w-40 h-40 mr-10'
              checked={status === 'done' ? true : false}
              onChange={(e) => {
                updateItem({
                  ...props.data,
                  status: e.target.checked ? 'done' : 'todo'
                })
              }}
            />
            {
              editing
              ?
              <input
                value={editingContent}
                onChange={(e) => {
                  setEditingContent(e.target.value)
                }}
                onBlur={() => {
                  setEditing(false)
                  updateItem({
                    ...props.data,
                    content: editingContent
                  })
                }}
              />
              :
              <p>{content}</p>
            }
          </div>)
}
