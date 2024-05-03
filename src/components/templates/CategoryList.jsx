import React from 'react'
import {useQuery} from "@tanstack/react-query"
import { getCategory } from '../../services/admin'
//components
import Loader from "../modules/Loader"

function CategoryList() {
    const {data,isLoading} = useQuery(["get_categories"],getCategory)
  return (
    <div>
        {isLoading ? <Loader/> : (
            data.data.map(item => <div key={item._id}>
                <img src={`${item.icon}.svg`}/>
                <h5>{item.name}</h5>
                <p>slug : {item.slug}</p>
            </div>)
        )}
    </div>
  )
}

export default CategoryList