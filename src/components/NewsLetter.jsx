const NewsLetter = () => {
	return <div className = 'w-full h-[90px] bg-[#8884bc]'>
		<div className = 'w-[800px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] h-full mx-auto flex justify-between items-center'>
			<div className = 'h-full flex flex-col justify-center'>
				<h2 className = 'font-popSBold text-[24px] text-white'>Newsletter</h2>
				<strong className = 'font-popReg text-indigo-900'>Subscribe to our newsletter</strong>
			</div>
			<div className = 'flex gap-2'>
				<input className = 'w-[300px] h-[40px] outline-none p-1' placeholder = 'Email'/>
				<button className = 'w-[140px] h-[40px] bg-indigo-900 text-white font-popLight text-[20px]'>Subscribe</button>
			</div>
		</div>
	</div>
}

export default NewsLetter;