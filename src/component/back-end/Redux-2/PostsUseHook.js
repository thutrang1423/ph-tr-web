import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap'
export default function PostsUseHook() {
    const [giatri, setGiaTri] = useState([
        {id: '1', title:'Title: 1', content:'content 1'},
        {id: '2', title:'Title: 2', content:'content 2'}
    ])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const id = nanoid();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setGiaTri((pre)=>[
           ...pre,
           {
            id: id,
            title: title,
            content: content
           },
        ]);
        setTitle('')
        setContent('')
    }
    const handleChangetitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleChangeContent = (e)=>{
        setContent(e.target.value)
    }
  return (
    <div>
    <ListGroup>
        {giatri.map((data)=>{
            return(<ListGroup.Item>{data.content}</ListGroup.Item>)
        })}
      
    </ListGroup>
    <hr/>
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
