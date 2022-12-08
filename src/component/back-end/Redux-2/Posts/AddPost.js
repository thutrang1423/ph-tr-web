import React from 'react'
import { useState } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'
export default function AddPostDemo() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const id = nanoid();
    const dispatch = useDispatch()
    const handleChangetitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleChangeContent = (e)=>{
        setContent(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(
                postAdded({
                   id: nanoid(),
                   title,
                   content 
                })
            )
            setTitle('')
            setContent('')

        }
    }
  return (
    <div>
        <hr/>
        AddPost
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={title} onChange={handleChangetitle}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Content:</Form.Label>
        <Form.Control as="textarea" value={content} onChange={handleChangeContent} />
      </Form.Group>
      
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
