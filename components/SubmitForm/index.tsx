import { createRef, useEffect, useRef, useState } from 'react'
import AuthBtn from '../AuthBtn'
import Card from '../Card'
import ElasticTab from '../ElasticTab'
import Input from '../Input'
import SubmitBtn from '../SubmitBtn'

const SubmitForm = () => {
  const errRef = useRef<HTMLParagraphElement>(null)
  const usernameInputRef = createRef<HTMLInputElement>()

  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [EmailFocus, setEmailFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')

  const validateUsername = (username: string) => {
    const USERNAME_REGEX = /^(09)\d{9}$/
    return USERNAME_REGEX.test(username)
  }

  const validatePassword = (password: string) => {
    const PASSWORD_REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,25}$/
    return PASSWORD_REGEX.test(password)
  }
  const validationEmail = (email: string) => {
    const EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
  }
  useEffect(() => {
    usernameInputRef.current?.focus()
  }, [])

  useEffect(() => {
    validateUsername(username)
    setValidUsername(validateUsername(username))
  }, [username])

  useEffect(() => {
    validatePassword(password)
    setValidPassword(validatePassword(password))
  }, [password])

  useEffect(() => {
    validationEmail(email)
    setValidEmail(validationEmail(email))
  }, [email])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  let handleSubmit = async () => {
    try {
      let res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
          name: { username },
          email: { email },
          password: { password },
        }),
      })
      await res.json()
      // if (res.status === 200) {
      //   setName('')
      //   setEmail('')
      //   setMessage('User created successfully')
      // } else {
      //   setMessage('Some error occured')
      // }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Card>
      <ElasticTab
        data={[
          {
            id: '1',
            isActive: true,
            name: 'عضویت',
          },
          {
            id: '2',
            isActive: false,
            name: 'ثبت نام',
          },
        ]}
      />
      <form>
        {/* <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
          {errMsg}
        </p> */}
        <Input
          id="username"
          ref={usernameInputRef}
          onChange={(e: any) => setUsername(e.target.value)}
          name="نام کاربری"
          icon="/icons/account.png"
          type="text"
        />
        {validUsername ? <p>True</p> : <p>false</p>}

        <Input
          id="email"
          name="آدرس ایمیل"
          icon="/icons/email.png"
          type="text"
          onChange={(e: any) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        {validEmail ? <p>True</p> : <p>false</p>}
        <Input
          id="password"
          name="رمز عبور"
          onChange={(e: any) => setPassword(e.target.value)}
          icon="/icons/password.png"
          type="password"
        />
        {validPassword ? <p>True</p> : <p>false</p>}

        <AuthBtn icon="/icons/facebook.png" title="ورود با فیسبوک" />
        <AuthBtn icon="/icons/google.png" title="ورود با ایمیل" />
        <div className="bottom_of_card">
          <span>با ثبت نام قوانین ومقرارات را پذیرفته اید</span>
          <SubmitBtn onClick={() => handleSubmit()} />
        </div>
      </form>
    </Card>
  )
}
export default SubmitForm
