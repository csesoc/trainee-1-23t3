import { useState, useEffect } from 'react';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // Reset error message
  useEffect(() => {
    setErrorMessage("");
  }, [password, confirmPassword]);
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");  // Set error message
      return;
    }
    alert(`Username: ${username} Email: ${email} and Password: ${password} and confirmPassword: ${confirmPassword}`)
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <div className="bg-white w-[70%] h-[86%] text-black rounded-[30px]">
        <div className={`${errorMessage ? 'bg-red-500 text-white text-center p-2 rounded mx-auto my-2 max-w-sm' : 'invisible'} my-2 h-10`}>
            {errorMessage}
        </div>
          <h1 className="mb-3 text-4xl font-bold text-left" style={{ paddingLeft: '220px', paddingTop: '30px', paddingBottom: '32px' }}>Sign up</h1>
          <div className="flex flex-col items-center justify-center">
            <input className="w-[50%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input className="w-[50%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <div className="relative w-[50%]">
              <input id="password-input" type={showPassword ? "text" : "password"} className="w-[100%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <button id="toggle-button" type="button" data-toggle-password='{ "target": "#password-input" }' className="absolute -top-2 -end-2 p-3.5 rounded-e-md focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line className={showPassword ? "hidden" : ""} x1="2" x2="22" y1="2" y2="22" />
                  <path className={showPassword ? "block" : "hidden"} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle className={showPassword ? "block" : "hidden"} cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
            <div className="relative w-[50%] mb-10">
              <input id="confirmPassword-input" type={showPassword ? "text" : "password"} className="w-[100%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
              <button id="toggle-button" type="button" data-toggle-password='{ "target": "#password-input" }' className="absolute -top-2 -end-2 p-3.5 rounded-e-md focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line className={showPassword ? "hidden" : ""} x1="2" x2="22" y1="2" y2="22" />
                  <path className={showPassword ? "block" : "hidden"} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle className={showPassword ? "block" : "hidden"} cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
            <button className="w-[40%] bg-[#61296f] hover:bg-[#311538] text-xl text-white font-bold py-4 px-4 rounded-full" onClick={handleSubmit}>Submit</button>
            <div className="flex mt-14 gap-2">
              <p>Already signed up?</p>
              <a className="font-bold" href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
