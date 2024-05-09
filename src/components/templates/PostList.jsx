import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/user'
//functions
import { sp } from '../../utils/number'
//components
import Loader from "../modules/Loader"
//styles
import styles from "./PostList.module.css"

function PostList() {
    const baseURL = import.meta.env.VITE_BASE_URL
    const [data,isLoading] = useQuery("my-post-list",getPosts)
  return (
    <div className={styles.list}>
      {isLoading ? <Loader/> : (
        <>
          <h3>اگهی های شما</h3>
          {data.data.posts.map(post => (
            <div key={post._id} className={styles.post}>
              <img src={`${baseURL}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(post.amount)}تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default PostList