import React from 'react'
import { sendOtp } from '../../services/auth'

function SendOtpForm({setStep , setMobile , mobile}) {

  const submitHandler = async (event) => {
    event.preventDefault()
    if(mobile.length !== 11) return

    const {response, error} = await sendOtp(mobile)
    if(response)setStep(2)
    if(error)console.log(error)
  }
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار, لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor='input'>شماره موبایل خود را وارد کنید.</label>
      <input type="text" placeholder='شماره موبایل' id='input' value={mobile} onChange={e => setMobile(e.target.value)}/>
      <button type='submit'>تایید</button>
    </form>
  )
}

export default SendOtpForm