import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

import { checkOtp } from '../../services/auth'
import { setCookie } from '../../utils/cookie'
import { getProfile } from '../../services/user';

function CheckOtpForm({setStep,code,setCode,mobile}) {
  const navigate = useNavigate()
  const {refetch} = useQuery(["profile"], getProfile)

  const submitHandler = async (event) => {
    event.preventDefault()
    if(code.length !==5 ) return;

    const {response,error} =await checkOtp(mobile,code);
    if(response){
      setCookie(response.data)
      navigate("/")
      refetch()
    }
    if(error)console.log(error)
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد اس ام اس شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor='input'>کد تایید را وارد کنید</label>
      <input id='input' placeholder='کد تایید' value={code} onChange={(e)=> setCode(e.target.value)}/>
      <button type='submit'>ورود</button>
      <button onClick={()=>setStep(1)}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm