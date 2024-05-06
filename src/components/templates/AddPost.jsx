import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { getCategory } from '../../services/admin'
import { getCookie } from '../../utils/cookie'
//styles
import styles from "./AddPost.module.css"

function AddPost() {
    const [form,setForm] = useState({
        title:"",
        content:"",
        amount:null,
        city:"",
        category:"",
        image:null
    })
    const {data} = useQuery(["get_categories"],getCategory)
    const changeHandler = (event) => {
        const name = event.target.name
        if(name !== "image"){
            setForm({...form,[name]:event.target.value})
        }
        else{
            setForm({...form,[name]:event.target.files[0]})
        }
    }
    const clickHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        for(let i in form){
            formData.append(i,form[i])
        }
        const token = getCookie("accessToken")
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`,formData,{
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization:`bearer ${token}`
            }
        }).then(response => toast.success(response.data.message)).catch(error => toast.error("مشکلی پیش امده است"))
    }
  return (
    <form onChange={changeHandler} className={styles.form}>
        <h3>افزودن آگهی</h3>
        <label htmlFor='title'>عنوان</label>
        <input type="text" name='title' id='title' />
        <label htmlFor='content'>توضیحات</label>
        <textarea name="content" id="content" />
        <label htmlFor='amount'>قیمت</label>
        <input type="number" name='amount' id='amount' />
        <label htmlFor='city'>شهر</label>
        <input type="text" name='city' id='city' />
        <label htmlFor='category'>دسته بندی</label>
        <select name="category" id="categort">
            {
                data?.data.map(item => <option key={item._id} value={item._id}>{item.namr}</option>)
            }
        </select>
        <label htmlFor='image'>عکس</label>
        <input type="file" name='image' id='image' />
        <button onClick={clickHandler}>ایجاد</button>
    </form>
  )
}

export default AddPost