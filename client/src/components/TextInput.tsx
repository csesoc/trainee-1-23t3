const TextInput = ({
	placeholder,
	setter,
	width = "70"
}: {
	placeholder: string,
	setter: Function,
	width?: string
}) => {
	return (
		<input
			className={`w-[${width}%] text-2xl mb-5 pb-3 focus:outline-none bg-transparent border-b-2 border-black`}
			placeholder={placeholder}
			onChange={e => setter(e.target.value)}
		/>
	)
}

export default TextInput