import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/user'
//components
import Loader from "../modules/Loader"

function PostList() {
    const baseURL = import.meta.env.VITE_BASE_URL
    const [data,isLoading] = useQuery("my-post-list",getPosts)
  return (
    <div>
      {isLoading ? <Loader/> : (
        <>
          <h3>اگهی های شما</h3>
          {data.data.posts.map(post => (
            <div key={post._id}>
              <img src={`${baseURL}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div>
                <p>{post.createdAt}</p>
                <span>{post.amount}تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default PostList