import AuthBtn from '../components/AuthBtn'
import Card from '../components/Card'
import Input from '../components/Input'
import SubmitBtn from '../components/SubmitBtn'

export default function Home() {
  return (
    <Card>
      <Input
        name="نام کاربری"
        icon="/icons/account.png"
        onClick={() => console.log('first')}
        type="text"
        value=""
      />
      <Input
        name="آدرس ایمیل"
        icon="/icons/email.png"
        onClick={() => console.log('first')}
        type="text"
        value=""
      />
      <Input
        name="رمز عبور"
        icon="/icons/password.png"
        onClick={() => console.log('first')}
        type="password"
        value=""
      />

      <AuthBtn icon="/icons/facebook.png" title="ورود با فیسبوک" />
      <AuthBtn icon="/icons/google.png" title="ورود با ایمیل" />
      <div className="bottom_of_card">
        <span>با ثبت نام قوانین ومقرارات را پذیرفته اید</span>
      </div>
      <SubmitBtn />
    </Card>
  )
}
