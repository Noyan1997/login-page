import Card from '../components/Card'
import Input from '../components/Input'

export default function Home() {
  return (
    <Card>
      <Input
        name="نام کاربری"
        icon="/icons/account.png"
        onClick={() => console.log('first')}
        type="text"
      />
      <Input
        name="آدرس ایمیل"
        icon="/icons/email.png"
        onClick={() => console.log('first')}
        type="text"
      />
      <Input
        name="رمز عبور"
        icon="/icons/password.png"
        onClick={() => console.log('first')}
        type="password"
      />
    </Card>
  )
}
