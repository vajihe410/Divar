import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/admin'
//styles
import styles from "./Sidebar.module.css"

function Sidebar() {
  const {data} = useQuery(["get_categories"],getCategory)
  return (
    <div className={styles.sidebar}>
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