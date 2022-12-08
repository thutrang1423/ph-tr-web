import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
export default function PostListDemo() {
    const posts = useSelector(state =>state.posts)
    const renderPosts = posts.map(post=>(
        <ListGroup.Item>{post.content}</ListGroup.Item>
    ))
  return (
    <div>PostList
        {renderPosts}

    </div>
  )
}
