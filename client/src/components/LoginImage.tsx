import loginImage from '../assets/login-image.png';

const LoginImage = () => {
	return (
		<div id="login-image" className="flex w-[50%] h-[86%] rounded-r-[30px] items-center justify-center">
			<img src={loginImage} className="h-[70%]" />
		</div>
	)
}

export default LoginImage;