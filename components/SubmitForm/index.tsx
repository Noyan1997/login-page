import { createRef, useEffect, useState } from 'react'
import AuthBtn from '../AuthBtn'
import Card from '../Card'
import ElasticTab from '../ElasticTab'
import Input from '../Input'
import SubmitBtn from '../SubmitBtn'

const SubmitForm = () => {
  const usernameInputRef = createRef<HTMLInputElement>()

  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
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
  // useEffect(() => {
  //   usernameInputRef.current?.focus()
  // }, [])

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
  let handleSubmit = async () => {
    try {
      let res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      })
      await res.json()
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
            name: '??????????',
          },
          {
            id: '2',
            isActive: false,
            name: '?????? ??????',
          },
        ]}
      />

      <Input
        id="username"
        ref={usernameInputRef}
        onChange={(e: any) => setUsername(e.target.value)}
        name="?????? ????????????"
        icon="/icons/account.png"
        type="text"
        style={
          !username || validUsername
            ? { border: '1px solid lightGray' }
            : { border: '1px solid red' }
        }
      />
      <div className="validtation_message">
        {!validUsername && username && (
          <p className="invalid">?????????? ???????????? ???? ???????? ???????? ????????</p>
        )}
      </div>

      <Input
        id="email"
        name="???????? ??????????"
        icon="/icons/email.png"
        type="text"
        onChange={(e: any) => setEmail(e.target.value)}
        style={
          !email || validEmail
            ? { border: '1px solid lightGray' }
            : { border: '1px solid red' }
        }
      />
      <div className="validtation_message">
        {!validEmail && email && (
          <p className="invalid">?????????? ???? ???????? ???????? ????????</p>
        )}
      </div>
      <Input
        id="password"
        name="?????? ????????"
        onChange={(e: any) => setPassword(e.target.value)}
        icon="/icons/password.png"
        type="password"
        style={
          !password || validPassword
            ? { border: '1px solid lightGray' }
            : { border: '1px solid red' }
        }
      />
      <div className="validtation_message">
        {!validPassword && password && (
          <p className="invalid">?????? ???????? ???? ???????? ???????? ????????</p>
        )}
      </div>

      <AuthBtn icon="/icons/facebook.png" title="???????? ???? ????????????" />
      <AuthBtn icon="/icons/google.png" title="???????? ???? ??????????" />
      <div className="bottom_of_card">
        <span>???? ?????? ?????? ???????????? ???????????????? ???? ?????????????? ??????</span>
        <SubmitBtn
          disabled={validPassword && validUsername ? false : true}
          onClick={() => handleSubmit()}
        />
      </div>
    </Card>
  )
}
export default SubmitForm
