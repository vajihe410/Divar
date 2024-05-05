import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/admin'
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