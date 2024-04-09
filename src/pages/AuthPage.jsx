import React, { useState } from 'react'
//components
import SendOtpForm from '../components/templates/SendOtpForm'
import CheckOtpForm from '../components/templates/CheckOtpForm'

function AuthPage() {
    const [step,setStep] = useState(1)
    const [mobile,setMobile] = useState("")
    const [code,setCode] = useState("")
  return (
    <div> 
        {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile}/>}
        {step === 2 && <CheckOtpForm setStep={setStep} mobile={mobile} code={code} setCode={setCode}/>}
    </div>
  )
}

export default AuthPage