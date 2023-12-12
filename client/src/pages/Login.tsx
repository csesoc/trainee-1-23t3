import '../styles/login.css';
import LoginForm from '../components/LoginForm';
import LoginImage from '../components/LoginImage';
export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  )
}
