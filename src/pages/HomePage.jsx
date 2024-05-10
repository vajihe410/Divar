import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getAllPosts } from '../services/user'
import { getCategory } from '../services/admin'
//components
import Sidebar from '../components/templates/Sidebar'
import Main from '../components/templates/Main'
import Loader from '../components/modules/Loader'

const style = {display:"flex"} 

function HomePage() {
  const {data:posts , isLoading:postsLoading} = useQuery(["post-list"],getAllPosts)
  const {data:categories , isLoading:categoriesLoading} = useQuery(["get_categories"],getCategory)
  return (
   <>
      {postsLoading || categoriesLoading ? <Loader/> : (
        <div style={style}>
        <Sidebar categories={categories} />
        <Main posts={posts}/>
        </div>
      )}
   </>
  )
}

export default HomePage