import { useState, useEffect } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

const RegisterForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// Reset error message
	useEffect(() => {
		setErrorMessage("");
	}, [username, email, password, confirmPassword]);

	const handleSubmit = () => {
		if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
			setErrorMessage("Fields can not be empty.");  // Set error message
			return;
		} else if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match.");  // Set error message
			return;
		}
		alert(`Username: ${username} Email: ${email} and Password: ${password} and confirmPassword: ${confirmPassword}`)
	};

	return (
		<div className="flex flex-col justify-center bg-white shadow-2xl w-[70%] h-[86%] text-black rounded-[30px]">
			<div className={`${errorMessage ? 'bg-red-500 text-white text-center p-2 rounded mx-auto my-2 max-w-sm' : 'invisible'} my-2 h-10`}>
				{errorMessage}
			</div>
			<div className="flex flex-col items-center justify-center mb-[5%]">
				<h1 className="w-[55%] mb-[3%] text-4xl font-bold text-left" style={{}}>Sign up</h1>
				<TextInput placeholder="Username" setter={setUsername} width="55" />
				<TextInput placeholder="Email" setter={setEmail} width="55" />
				<PasswordInput placeholder="Password" setter={setPassword} width="55" />
				<PasswordInput placeholder="Confirm Password" setter={setConfirmPassword} width="55" />
				<button className="mt-10 w-[40%] bg-[#61296f] hover:bg-[#311538] text-xl text-white font-bold py-4 px-4 rounded-full" onClick={handleSubmit}>Submit</button>
				<div className="flex mt-[3%] gap-2">
					<p>Already signed up?</p>
					<a className="font-bold" href="/login">Log in</a>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm;