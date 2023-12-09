import { useState } from 'react';
import { getAxios } from '../axiosconfig';
import { AxiosResponse } from 'axios';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		getAxios()
			.post('/login', {
				email: email,
				password: password
			})
			.then((res: AxiosResponse) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="flex flex-col bg-white w-[50%] h-[86%] text-black rounded-l-[30px] items-center justify-center">
			<h1 className="mb-3 text-5xl font-bold">Welcome Back!</h1>
			<p className="mb-10 text-2xl">Please enter your details</p>
			<TextInput placeholder="Email" setter={setEmail} />
			<PasswordInput placeholder="Password" setter={setPassword} forgot={true} />
			<button className="mt-10 w-[40%] bg-[#61296f] hover:bg-[#311538] text-xl text-white font-bold py-4 px-4 rounded-full" onClick={handleSubmit}>Log in</button>
			<div className="flex mt-20 gap-2">
				<p>Don't have an account?</p>
				<a className="font-bold" href="/register">Sign up</a>
			</div>
		</div>
	)
}

export default LoginForm;