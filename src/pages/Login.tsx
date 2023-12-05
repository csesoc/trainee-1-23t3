import '../styles/login.css';

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <div className="flex bg-white w-[50%] h-[86%] text-red-900 rounded-l-[30px] text-center items-center justify-center">
          <h1>Welcome Back!</h1>
          <p>Please enter your details</p>
        </div>
        <div id="login-image" className="block w-[50%] h-[86%] rounded-r-[30px]">
        </div>
      </div>
    </div>
  )
}
