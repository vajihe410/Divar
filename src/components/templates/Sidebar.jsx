import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/admin'

function Sidebar() {
  const {data} = useQuery(["get_categories"],getCategory)
  return (
    <div>
      <ul>
        {data?.data.map(category => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default Sidebar